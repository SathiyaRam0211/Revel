export const URL = {
  register: "https://form.jotform.com/241773892472467",
};

export const OTP = {
  length: 6,
  duration: 60,
};

export const ART_FORMS = [
  { value: "breaking", label: "Breaking" },
  { value: "choreography", label: "Choreography" },
  { value: "hipHop", label: "Hip Hop" },
  { value: "locking", label: "Locking" },
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
