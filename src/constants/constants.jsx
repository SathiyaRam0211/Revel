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
  { value: "locking", label: "Campbellocking/Locking" },
  { value: "house", label: "House" },
  { value: "graffiti", label: "Graffiti" },
  { value: "visualArtGraffiti", label: "Visual Art and Graffiti" },
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
  { value: "breaking-rev", label: "Breaking - Revision" },
  { value: "choreo-wk", label: "Choreo Workshop" },
  { value: "hipHop-rev", label: "Hip Hop - Revision" },
  { value: "locking-rev", label: "Locking - Revision" },
  { value: "visualArtGraffiti-rev", label: "Visual Art and Graffiti - Revision" },
  { value: "house-rev", label: "House - Revision" },
  { value: "parai-wk", label: "Parai Workshop" },
  { value: "practice", label: "Practice Session" },
  { value: "graffiti-rev", label: "Graffiti - Revision" },
  { value: "afro-wk", label: "Afro Workshop" },
  { value: "breaking-wk", label: "Fitness and Breaking Workshop" },
  { value: "graffiti-wk", label: "Graffiti Workshop" },
  { value: "karokeOpenmic-ev", label: "Karoke & Open Mic Event" },
  { value: "ganaCypher-ev", label: "Gana Cypher Event" },
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
