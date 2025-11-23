export const URL = {
  register: "https://forms.zohopublic.in/adminre1/form/TrialBooking/formperma/ZbKh5Tg0YiP__B_s48YNv9w8S1r83cqjzd9EjDa5oQ4",
};

export const OTP = {
  length: 6,
  duration: 60,
};

export const ART_FORMS = [
  { value: "adult-choreo", label: "Adult Choreography" },
  { value: "kids-class", label: "Kids Dance Class" },
];

export const TABS = [
  { value: "all", label: "All" },
  { value: "kids-class", label: "Kids Dance Class" },
  { value: "adult-choreo", label: "Adult Choreography Class" },
  { value: "workshop", label: "Workshop" },
];

export const VARIABLES = {
  backgroundColor: "#212a2f",
  secondaryBgColor: "#263238",
  darkBgColor: "#212b30",
  primaryColor: "#d4f465",
  textColor: "#ffffff",
  secondaryTextColor: "#02028b",
  lightTextColor: "#d9d9d9",
  darkTextColor: "#000000",
  highlightColor: "#81e0ff",
  desktopSmall: "max-width: 1080px",
  tabletLarge: "max-width: 991px",
  mobileLarge: "max-width: 478px",
  headerFont: "Hepta Slab",
  get gradient() {
    return `linear-gradient(
      96deg,
      ${this.highlightColor} -1.9%,
      ${this.primaryColor} 93.17%
    )`;
  },
};

export const monthToNumber = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
