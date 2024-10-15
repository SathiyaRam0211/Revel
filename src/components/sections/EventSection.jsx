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
  EventContainer,
  StatusBar,
  FloaterText,
  StickyBar,
  Pseudo,
  FloaterButton,
} from "../../utils/util-styled-components";
import {
  getCurrentMonthName,
  getFormattedDate,
  preprocessEventDetails,
} from "../../utils/util-helper";
import TabSection from "./TabSection";
import EventCard from "../Event";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const processedEventDetails = preprocessEventDetails(eventDetails);

const EventSection = () => {
  const currentDay = new Date().getDate();
  const currentMonth = getCurrentMonthName();
  const eventRefs = useRef({});
  const observerRef = useRef(null);
  const firstEventRef = useRef(null);
  const eventsWrapperRef = useRef(null);

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isScrollTopEnabled, setIsScrollTopEnabled] = useState(true);
  const [isScrollDownEnabled, setIsScrollDownEnabled] = useState(true);

  const allEvents = useMemo(() => {
    const eventsArray = Object.entries(processedEventDetails).flatMap(
      ([month, days]) =>
        days.map((day) => ({
          ...day,
          month,
          monthNumber: monthToNumber[month],
        }))
    );
    return eventsArray.sort(
      (a, b) => a.monthNumber - b.monthNumber || a.day - b.day
    );
  }, [processedEventDetails]);

  const filteredEvents = useMemo(() => {
    if (!selectedOption || selectedOption.value === "all") {
      return allEvents;
    }
    return allEvents
      .map((day) => ({
        ...day,
        events: day.events.filter((event) => {
          const isFutureEvent =
            day.month !== currentMonth || day.day >= currentDay;

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
  }, [allEvents, selectedOption, currentDay, currentMonth]);

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

  const getEmptyStateText = useCallback(() => {
    return `No ${
      selectedOption?.value === "workshop" ? "Workshop(s)" : "Event(s)"
    } found`;
  }, [selectedOption?.value]);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const [month] = entry.target.id.split("-");
        setSelectedMonth(month);
      }
    });
  }, []);

  const handleScroll = useCallback(() => {
    if (firstEventRef.current) {
      const firstEventTop = firstEventRef.current.getBoundingClientRect().top;
      setIsScrollTopEnabled(firstEventTop < -50); //50 pixels from top
    }
    const todayKey = `${currentMonth}-${currentDay}`;
    if (eventRefs.current[todayKey]) {
      const currentEventPosition =
        eventRefs.current[todayKey].getBoundingClientRect().top;
      setIsScrollDownEnabled(currentEventPosition > window.innerHeight);
    }
  }, [currentMonth, currentDay, firstEventRef, eventRefs]);

  const scrollToTop = () => {
    if (firstEventRef.current) {
      firstEventRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCurrentDay = () => {
    const scrollToFirstAvailableDay = (month, startDay) => {
      for (let day = startDay; day <= 31; day++) {
        const key = `${month}-${day}`;
        if (eventRefs.current[key]) {
          eventRefs.current[key].scrollIntoView({ behavior: "smooth" });
          return true;
        }
      }
      return false;
    };
    const todayKey = `${currentMonth}-${currentDay}`;
    if (!eventRefs.current[todayKey]) {
      if (!scrollToFirstAvailableDay(currentMonth, currentDay + 1)) {
        const firstKeyInCurrentMonth = Object.keys(eventRefs.current)
          .filter((key) => key.startsWith(`${currentMonth}-`))
          .sort()[0];

        if (
          firstKeyInCurrentMonth &&
          eventRefs.current[firstKeyInCurrentMonth]
        ) {
          eventRefs.current[firstKeyInCurrentMonth].scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    } else {
      eventRefs.current[todayKey].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const scrollableElement = eventsWrapperRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.5,
      });
    }
    const currentObserver = observerRef.current;
    Object.values(eventRefs.current).forEach((ref) => {
      if (ref) {
        currentObserver.observe(ref);
      }
    });
    return () => {
      currentObserver.disconnect();
    };
  }, [filteredEvents]);

  useEffect(() => {
    scrollToCurrentDay();
  }, [selectedOption, currentDay, currentMonth, eventRefs]);

  return (
    <PageSection>
      <EventContainer>
        <StatusBar>
          <FloaterText>{selectedMonth}</FloaterText>
        </StatusBar>
        {filteredEvents.length > 0 && (
          <StickyBar>
            <FloaterButton
              $disabled={!isScrollTopEnabled}
              onClick={scrollToTop}
            >
              <FontAwesomeIcon icon={faAnglesUp} />
            </FloaterButton>
            <FloaterButton
              $disabled={!isScrollDownEnabled}
              onClick={scrollToCurrentDay}
            >
              <FontAwesomeIcon icon={faAnglesDown} />
            </FloaterButton>
          </StickyBar>
        )}
        <div>
          <HeroText>Classes</HeroText>
          <TabSection setSelectedOption={setSelectedOption} />
          <EventsWrapper ref={eventsWrapperRef}>
            <Pseudo ref={firstEventRef} />
            {filteredEvents.length > 0 ? (
              filteredEvents.map(({ day, month, events }) => (
                <EventCard
                  key={`${month}-${day}`}
                  day={day}
                  month={month}
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
