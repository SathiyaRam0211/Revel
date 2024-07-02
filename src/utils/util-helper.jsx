import { url } from "../constants/constants";

export const handleRegister = () => {
  window.open(url.register, "_blank");
};

export const getOrdinalSuffix = (day) => {
  if (day > 3 && day < 21) return "th"; // Handle 11th, 12th, 13th
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const getFormattedDate = (month, day, year = 2024) => {
  const date = new Date(`${month} ${day}, ${year}`);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const ordinalSuffix = getOrdinalSuffix(day);
  return `${day}${ordinalSuffix} - ${dayOfWeek}`;
};
