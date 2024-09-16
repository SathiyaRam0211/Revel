import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { ART_FORMS, monthToNumber, VARIABLES } from "../../constants/constants";
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
// import CustomSelect from "../common/CustomSelect";
import {
  getCurrentMonthName,
  // getFilteredArtForms,
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
import TabSection from "./TabSection";

const processedEventDetails = preprocessEventDetails(eventDetails);

const EventSection = () => {
  const availableMonths = Object.keys(processedEventDetails);
  const currentDay = new Date().getDate();
  const currentMonth = getCurrentMonthName();
  const eventRefs = useRef({});

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedOption, setSelectedOption] = useState(null);

  // const filteredArtForms = useMemo(
  //   () => getFilteredArtForms(processedEventDetails, selectedMonth),
  //   [selectedMonth]
  // );

  // const handleFilterChange = useCallback((selected) => {
  //   setSelectedOption(selected || null);
  // }, []);

  const filteredEvents = useMemo(() => {
    const events = processedEventDetails[selectedMonth] || [];
    if (!selectedOption || selectedOption.value === "all") {
      return events;
    }
    return events
      .map((day) => ({
        ...day,
        events: day.events.filter((event) => {
          if (selectedOption.value === "workshop") {
            return (
              event.type === "workshop" &&
              (selectedMonth !== currentMonth || day.day >= currentDay)
            );
          } else {
            if (selectedOption.value === "event") {
              return (
                event.type === "event" &&
                (selectedMonth !== currentMonth || day.day >= currentDay)
              );
            } else {
              return (
                event.category === selectedOption.value &&
                (selectedMonth !== currentMonth || day.day >= currentDay)
              );
            }
          }
        }),
      }))
      .filter((day) => day.events.length > 0);
  }, [selectedMonth, selectedOption, currentDay, currentMonth]);

  const fetchArtForm = useCallback((category) => {
    return ART_FORMS.find((each) => each?.value === category)?.label || "Other";
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
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollToCurrentDay = () => {
      if (selectedMonth === currentMonth) {
        const targetDay = Object.keys(eventRefs.current)
          .map(Number)
          .find((day) => day >= currentDay);
        if (targetDay && eventRefs.current[targetDay]) {
          eventRefs.current[targetDay].scrollIntoView({ behavior: "smooth" });
        }
      } else {
        const firstDayOfMonth = Object.keys(eventRefs.current)
          .map(Number)
          .sort((a, b) => a - b)[0];
        if (firstDayOfMonth && eventRefs.current[firstDayOfMonth]) {
          eventRefs.current[firstDayOfMonth].scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };
    scrollToCurrentDay();
  }, [selectedOption, selectedMonth, currentDay, currentMonth]);

  return (
    <PageSection>
      <EventContainer>
        <div>
          <Toolbar>
            <HeroText>
              Classes -{" "}
              {windowWidth < 991
                ? selectedMonth.substring(0, 3)
                : selectedMonth}
              {availableMonths.indexOf(selectedMonth) !== 0 && (
                <FontAwesomeIcon
                  onClick={() => handleMonthChange(-1)}
                  style={iconButtonStyle}
                  icon={faCircleChevronUp}
                />
              )}
              {availableMonths.indexOf(selectedMonth) !==
                availableMonths.length - 1 && (
                <FontAwesomeIcon
                  onClick={() => handleMonthChange(1)}
                  style={iconButtonStyle}
                  icon={faCircleChevronDown}
                />
              )}
            </HeroText>
            {/* <CustomSelect
              options={filteredArtForms}
              onChange={handleFilterChange}
              placeholder={"Filter by Artform"}
            /> */}
          </Toolbar>
          <TabSection
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <EventsWrapper>
            {filteredEvents.length ? (
              filteredEvents.map(({ day, events }) => (
                <div key={day} ref={(ref) => (eventRefs.current[day] = ref)}>
                  <DayHeader>
                    <span>{getFormattedDate(selectedMonth, day)}</span>
                  </DayHeader>
                  {events.map(
                    ({ category, faculty, time, venue, id }, index) => (
                      <EventRow
                        $isComplete={
                          monthToNumber[selectedMonth] <
                            monthToNumber[currentMonth] ||
                          (monthToNumber[selectedMonth] ===
                            monthToNumber[currentMonth] &&
                            day < currentDay)
                        }
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
                              color={VARIABLES.primaryColor}
                            />{" "}
                            {time}
                          </span>
                        </div>
                        <span style={venueStyle}>
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            fontSize="12px"
                            color={VARIABLES.primaryColor}
                          />{" "}
                          {venue}
                        </span>
                        <span style={facultyStyle}>{faculty}</span>
                      </EventRow>
                    )
                  )}
                </div>
              ))
            ) : (
              <EventRow $isEmpty>
                No{" "}
                {selectedOption.value === "workshop" ? "Workshops " : "Events "}
                found
              </EventRow>
            )}
          </EventsWrapper>
        </div>
      </EventContainer>
    </PageSection>
  );
};

export default React.memo(EventSection);
