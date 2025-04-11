export const URL = {
  register: "https://rzp.io/rzp/backintime-revel",
};

export const OTP = {
  length: 6,
  duration: 60,
};

export const ART_FORMS = [
  { value: "breaking", label: "Breaking" },
  { value: "choreography", label: "Choreography" },
  { value: "hipHop", label: "Hip Hop" },
  { value: "locking", label: "Campbellocking/Locking" },
  { value: "house", label: "House" },
  { value: "graffiti", label: "Graffiti" },
  { value: "parai", label: "Parai" },
  { value: "silambam", label: "Silambam" },
  { value: "digitalDesign", label: "Digital Design" },
  { value: "contentProduction", label: "Content Production" },
  { value: "financialManagement", label: "Manage Finances" },
  { value: "fitness", label: "Fitness and Workouts" },
  { value: "danceFitness", label: "Dance Fitness" },
  { value: "freestyleBasics", label: "Freestyle Basics" },
  { value: "folkChoreography", label: "Folk Choreography" },
  { value: "creativeMovement", label: "Creative Movement" },
  { value: "choreo", label: "Choreo Workshop", type: "workshop" },
  { value: "parai", label: "Parai Workshop", type: "workshop" },
  { value: "afro", label: "Afro Workshop", type: "workshop" },
  { value: "graffiti", label: "Graffiti Workshop", type: "workshop" },
  { value: "breaking", label: "Fitness and Breaking", type: "workshop" },
  { value: "ganaCypher", label: "Gana Cypher", type: "event" },
  { value: "practice", label: "Practice Session" },
  { value: "houseAndCreative", label: "Creative movement & House"},
  { value: "choreography-1", label: "Choreography Batch 1" },
  { value: "choreography-2", label: "Choreography Batch 2" },
  { value: "locking-course", label: "Locking Course" },

];

export const TABS = [
  { value: "all", label: "All" },
  // { value: "breaking", label: "Breaking" },
  // { value: "creativeMovement", label: "Creative Movement" },
  // { value: "event", label: "Event" },
  // { value: "hipHop", label: "Hip Hop" },
  // { value: "house", label: "House" },
  // { value: "locking", label: "Locking" },
  // { value: "choreography", label: "Choreography" },
  { value: "choreography-1", label: "Choreography Batch 1" },
  { value: "choreography-2", label: "Choreography Batch 2" },
  { value: "locking-course", label: "Locking Course" },
  // { value: "houseAndCreative", label: "Creative movement and House"},
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
