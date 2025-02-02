import { ART_FORMS, daysOfWeek, URL } from "../constants/constants";

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export async function fetchUrl(url, method = "GET", data = null, headers = {}) {
  const defaultHeaders = {
    "Content-Type": "application/json",
    ...headers,
  };

  const config = {
    method,
    headers: defaultHeaders,
    ...(data && { body: JSON.stringify(data) }),
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json();
      return {
        data: null,
        error: `Error: ${response.status} ${response.statusText} - ${errorData.message}`,
      };
    }

    const responseData = await response.json();
    return { data: responseData, error: null };
  } catch (error) {
    console.error("API call failed:", error);
    return { data: null, error: error.message };
  }
}

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
// FIX THIS HARDCODED YEAR
export const getFormattedDate = (month, day, year = 2025) => {
  const date = new Date(`${month} ${day}, ${year}`);
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

export const getFilteredArtForms = (processedEventDetails, currentMonth) => {
  const currentMonthEvents = processedEventDetails[currentMonth];
  if (!currentMonthEvents) return [];
  const uniqueCategories = new Set();
  currentMonthEvents.forEach((day) => {
    day.events.forEach((event) => {
      uniqueCategories.add(event.category);
    });
  });
  return ART_FORMS.filter((artForm) => uniqueCategories.has(artForm.value));
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
