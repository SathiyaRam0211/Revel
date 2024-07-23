import { URL } from "../constants/constants";

export const handleRegister = () => {
  window.open(URL.register, "_blank");
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

export const getCurrentMonthName = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[new Date().getMonth()];
};

export const preprocessEventDetails = (eventDetails) => {
  let eventCounter = 1;
  const processedEventDetails = {};
  for (const month in eventDetails) {
    processedEventDetails[month] = eventDetails[month].map((day) => ({
      ...day,
      events: day.events.map((event) => ({
        ...event,
        id: eventCounter++,
      })),
    }));
  }
  return processedEventDetails;
};

export const validatePhoneNumber = (number) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(number);
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};
