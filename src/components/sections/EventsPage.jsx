import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { artForms, variables } from "../../constants/constants";
import { eventDetails } from "../../constants/events";
import {
  DayHeader,
  EventRow,
  EventsWrapper,
  HeroText,
  PageSection,
  Toolbar,
  EventContainer,
} from "../../utils/util-styled-components";
import CustomSelect from "../common/CustomSelect";
import {
  getCurrentMonthName,
  getFormattedDate,
  preprocessEventDetails,
} from "../../utils/util-helper";
import {
  categoryStyle,
  facultyStyle,
  iconButtonStyle,
  timeStyle,
  venueStyle,
  idStyle,
} from "../../utils/util-inline-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const processedEventDetails = preprocessEventDetails(eventDetails);

const EventsPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonthName());
  const [selectedOption, setSelectedOption] = useState(null);
  const availableMonths = Object.keys(processedEventDetails);
  const currentDay = new Date().getDate();
  const eventRefs = useRef({});

  const handleChange = useCallback((selected) => {
    setSelectedOption(selected || null);
  }, []);

  const filteredEvents = useMemo(() => {
    const events = processedEventDetails[selectedMonth];
    if (!selectedOption) {
      return events;
    }
    return events
      .map((day) => ({
        ...day,
        events: day.events.filter(
          (event) =>
            event.category === selectedOption.value && day.day >= currentDay
        ),
      }))
      .filter((day) => day.events.length > 0);
  }, [selectedMonth, selectedOption, currentDay]);

  const fetchArtForm = useCallback((category) => {
    return artForms.find((each) => each?.value === category)?.label || "Other";
  }, []);

  const handleMonthChange = useCallback(
    (direction) => {
      const currentIndex = availableMonths.indexOf(selectedMonth);
      const newIndex = currentIndex + direction;
      if (newIndex >= 0 && newIndex < availableMonths.length) {
        setSelectedMonth(availableMonths[newIndex]);
      }
    },
    [availableMonths, selectedMonth]
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.outerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const days = Object.keys(eventRefs.current)
      .map(Number)
      .sort((a, b) => a - b);
    const nextEventDay = days.find((day) => day >= currentDay) || days[0];

    if (eventRefs.current[nextEventDay]) {
      eventRefs.current[nextEventDay].scrollIntoView({ behavior: "smooth" });
    }
  }, [currentDay, selectedMonth, selectedOption]);

  return (
    <PageSection>
      <EventContainer>
        <div className="wrapper">
          <Toolbar>
            <HeroText>
              Classes -{" "}
              {windowWidth < 991
                ? selectedMonth.substring(0, 3)
                : selectedMonth}{" "}
              {availableMonths.indexOf(selectedMonth) !== 0 && (
                <FontAwesomeIcon
                  onClick={() => handleMonthChange(-1)}
                  style={iconButtonStyle}
                  icon={faCircleChevronUp}
                />
              )}{" "}
              {availableMonths.indexOf(selectedMonth) !==
                availableMonths.length - 1 && (
                <FontAwesomeIcon
                  onClick={() => handleMonthChange(1)}
                  style={iconButtonStyle}
                  icon={faCircleChevronDown}
                />
              )}
            </HeroText>
            <CustomSelect
              options={artForms}
              onChange={handleChange}
              placeholder={"Filter by Artform"}
            />
          </Toolbar>
          <EventsWrapper>
            {filteredEvents.map(({ day, events }) => (
              <div key={day} ref={(ref) => (eventRefs.current[day] = ref)}>
                <DayHeader>
                  <span>{getFormattedDate(selectedMonth, day)}</span>
                </DayHeader>
                {events.map(({ category, faculty, time, venue, id }, index) => (
                  <EventRow
                    $isComplete={day < currentDay}
                    key={`${category}-${day}-${index}`}
                  >
                    <div>
                      <span style={idStyle}>#{id}</span>
                      <span style={categoryStyle}>
                        {fetchArtForm(category)}
                      </span>
                      <span style={timeStyle}>
                        <FontAwesomeIcon
                          icon={faClock}
                          fontSize="12px"
                          color={variables.primaryColor}
                        />{" "}
                        {time}
                      </span>
                    </div>
                    <span style={venueStyle}>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        fontSize="12px"
                        color={variables.primaryColor}
                      />{" "}
                      {venue}
                    </span>
                    <span style={facultyStyle}>{faculty}</span>
                  </EventRow>
                ))}
              </div>
            ))}
          </EventsWrapper>
        </div>
      </EventContainer>
    </PageSection>
  );
};

export default EventsPage;
