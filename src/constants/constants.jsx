export const url = {
  register: "https://form.jotform.com/241773892472467",
};

export const artForms = [
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
  { value: "folkChoreography", label: "Folk Choreography" }
];

export const variables = {
  backgroundColor: "#222a2f",
  secondaryBgColor: "#263238",
  primaryColor: "#d4f465",
  textColor: "#ffffff",
  secondaryTextColor: "#02028b",
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
