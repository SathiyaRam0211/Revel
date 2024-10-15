import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { VARIABLES } from "../constants/constants";
import {
  categoryStyle,
  facultyStyle,
  idStyle,
  timeStyle,
  venueStyle,
} from "../utils/util-inline-styles";
import { DayHeader, EventRow } from "../utils/util-styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react"; // Import useCallback

const EventCard = ({
  day,
  month,
  currentMonth,
  currentDay,
  events,
  eventRefs,
  getFormattedDate,
  fetchArtForm,
  monthToNumber,
}) => {
  const renderEventDetails = useCallback(
    ({ category, faculty, time, venue, id, type }) => (
      <EventRow
        $isComplete={
          monthToNumber[month] < monthToNumber[currentMonth] ||
          (monthToNumber[month] === monthToNumber[currentMonth] &&
            day < currentDay)
        }
        key={`${category}-${id}`}
      >
        <div>
          <span style={idStyle}>#{id}</span>
          <span style={categoryStyle}>{fetchArtForm(category, type)}</span>
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
    ),
    [
      monthToNumber,
      month,
      currentMonth,
      currentDay,
      fetchArtForm,
      idStyle,
      categoryStyle,
      timeStyle,
      venueStyle,
      facultyStyle,
    ]
  );

  return (
    <div
      ref={(ref) => {
        eventRefs.current[`${month}-${day}`] = ref;
      }}
      id={`${month}-${day}`}
    >
      <DayHeader>
        <span>{getFormattedDate(month, day)}</span>
      </DayHeader>
      {events.map(renderEventDetails)}
    </div>
  );
};

export default EventCard;
