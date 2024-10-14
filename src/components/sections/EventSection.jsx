import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { ART_FORMS, monthToNumber } from "../../constants/constants";
import { eventDetails } from "../../constants/events";
import {
  EventRow,
  EventsWrapper,
  HeroText,
  PageSection,
  Toolbar,
  EventContainer,
} from "../../utils/util-styled-components";
import {
  debounce,
  getCurrentMonthName,
  getFormattedDate,
  preprocessEventDetails,
} from "../../utils/util-helper";
import { iconButtonStyle } from "../../utils/util-inline-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import TabSection from "./TabSection";
import EventCard from "../Event";

const processedEventDetails = preprocessEventDetails(eventDetails);

const EventSection = () => {
  const availableMonths = Object.keys(processedEventDetails);
  const currentDay = new Date().getDate();
  const currentMonth = getCurrentMonthName();
  const eventRefs = useRef({});

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedOption, setSelectedOption] = useState(null);

  const filteredEvents = useMemo(() => {
    const events = processedEventDetails[selectedMonth] || [];
    if (!selectedOption || selectedOption.value === "all") return events;
    return events
      .map((day) => ({
        ...day,
        events: day.events.filter((event) => {
          const isFutureEvent =
            selectedMonth !== currentMonth || day.day >= currentDay;

          if (selectedOption.value === "workshop") {
            return event.type === "workshop" && isFutureEvent;
          }

          if (selectedOption.value === "event") {
            return event.type === "event" && isFutureEvent;
          }

          return event.category === selectedOption.value && isFutureEvent;
        }),
      }))
      .filter((day) => day.events.length > 0);
  }, [selectedMonth, selectedOption, currentDay, currentMonth]);

  const fetchArtForm = useCallback((category, type) => {
    return (
      ART_FORMS.find((each) => {
        if (type !== null) {
          return each?.value === category && each?.type === type;
        }
        return each?.value === category;
      })?.label || "Other"
    );
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

  const getEmptyStateText = useCallback(() => {
    return `No ${
      selectedOption?.value === "workshop" ? "Workshop(s)" : "Event(s)"
    } found`;
  }, [selectedOption?.value]);

  const getMonthDisplay = useCallback(() => {
    return windowWidth < 991 ? selectedMonth.substring(0, 3) : selectedMonth;
  }, [selectedMonth, windowWidth]);

  const renderMonthChangeIcons = useCallback(
    () => (
      <>
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
      </>
    ),
    [availableMonths, selectedMonth]
  );

  const isScrollable = useMemo(
    () => filteredEvents.length > 5,
    [filteredEvents]
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    const debouncedResize = debounce(handleResize, 300);
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
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
              Classes - {getMonthDisplay()} {renderMonthChangeIcons()}
            </HeroText>
          </Toolbar>
          <TabSection setSelectedOption={setSelectedOption} />
          <EventsWrapper $isScrollable={isScrollable}>
            {filteredEvents.length ? (
              filteredEvents.map(({ day, events }) => (
                <EventCard
                  key={day}
                  day={day}
                  selectedMonth={selectedMonth}
                  currentMonth={currentMonth}
                  currentDay={currentDay}
                  events={events}
                  eventRefs={eventRefs}
                  getFormattedDate={getFormattedDate}
                  fetchArtForm={fetchArtForm}
                  monthToNumber={monthToNumber}
                />
              ))
            ) : (
              <EventRow $isEmpty>{getEmptyStateText()}</EventRow>
            )}
          </EventsWrapper>
        </div>
      </EventContainer>
    </PageSection>
  );
};

export default React.memo(EventSection);
