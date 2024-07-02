import { variables } from "../constants/constants";

const ellipsis = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export const multiSelectStyle = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: `${variables.backgroundColor}`,
    cursor: "pointer",
    minWidth: "180px",
    maxWidth: "400px",
    fontFamily: "Haskoy",
    fontSize: "14px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    outline: "none",
    borderColor: state.isFocused
      ? `${variables.primaryColor}`
      : baseStyles.borderColor,
    boxShadow: state.isFocused
      ? `0 0 0 1px ${variables.primaryColor}`
      : baseStyles.boxShadow,
    "&:hover": {
      borderColor: `${variables.primaryColor}`,
    },
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: `${variables.secondaryBgColor}`,
    color: `${variables.textColor}`,
    overflow: "auto",
    msOverflowStyle: "none",
    scrollbarWidth: "thin",
    scrollbarColor: `${variables.primaryColor} ${variables.secondaryBgColor}`,
    "&::-webkit-scrollbar": {
      width: "12px",
    },
    "&::-webkit-scrollbar-track": {
      background: variables.secondaryBgColor,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: variables.primaryColor,
      borderRadius: "10px",
      border: `3px solid ${variables.secondaryBgColor}`,
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused
      ? variables.primaryColor
      : variables.secondaryBgColor,
    color: state.isFocused ? variables.secondaryTextColor : variables.textColor,
    cursor: "pointer",
    fontFamily: "Haskoy",
    fontSize: "14px",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    display: "flex",
    flexWrap: "nowrap",
    overflow: "hidden",
  }),
};

export const selectStyle = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: `${variables.backgroundColor}`,
    cursor: "pointer",
    width: "140px",
    ...ellipsis,
    fontFamily: "Haskoy",
    fontSize: "12px",
    outline: "none",
    borderColor: state.isFocused
      ? `${variables.primaryColor}`
      : baseStyles.borderColor,
    boxShadow: state.isFocused
      ? `0 0 0 1px ${variables.primaryColor}`
      : baseStyles.boxShadow,
    "&:hover": {
      borderColor: `${variables.primaryColor}`,
    },
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: `${variables.secondaryBgColor}`,
    color: `${variables.textColor}`,
    overflow: "auto",
    msOverflowStyle: "none",
    scrollbarWidth: "thin",
    scrollbarColor: `${variables.primaryColor} ${variables.secondaryBgColor}`,
    "&::-webkit-scrollbar": {
      width: "12px",
    },
    "&::-webkit-scrollbar-track": {
      background: variables.secondaryBgColor,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: variables.primaryColor,
      borderRadius: "10px",
      border: `3px solid ${variables.secondaryBgColor}`,
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused
      ? variables.primaryColor
      : variables.secondaryBgColor,
    color: state.isFocused ? variables.secondaryTextColor : variables.textColor,
    cursor: "pointer",
    fontFamily: "Haskoy",
    fontSize: "12px",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: `${variables.primaryColor}`,
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    color: `${variables.textColor}`,
  }),
};

export const categoryStyle = {
  width: "150px",
  fontWeight: "600",
  ...ellipsis,
};

export const facultyStyle = {
  width: "120px",
  ...ellipsis,
};

export const timeStyle = {
  display: "flex",
  gap: "6px",
  alignItems: "center",
  width: "120px",
  ...ellipsis,
};

export const venueStyle = {
  display: "flex",
  gap: "6px",
  alignItems: "center",
  width: "240px",
  ...ellipsis,
};

export const iconButtonStyle = {
  cursor: "pointer",
  fontSize: "14px",
  color: `${variables.primaryColor}`,
};
