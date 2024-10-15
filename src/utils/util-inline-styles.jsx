import { VARIABLES } from "../constants/constants";

const ellipsis = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export const multiSelectStyle = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: `${VARIABLES.backgroundColor}`,
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
      ? `${VARIABLES.primaryColor}`
      : baseStyles.borderColor,
    boxShadow: state.isFocused
      ? `0 0 0 1px ${VARIABLES.primaryColor}`
      : baseStyles.boxShadow,
    "&:hover": {
      borderColor: `${VARIABLES.primaryColor}`,
    },
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: `${VARIABLES.secondaryBgColor}`,
    color: `${VARIABLES.textColor}`,
    overflow: "auto",
    msOverflowStyle: "none",
    scrollbarWidth: "thin",
    scrollbarColor: `${VARIABLES.primaryColor} ${VARIABLES.secondaryBgColor}`,
    "&::-webkit-scrollbar": {
      width: "12px",
    },
    "&::-webkit-scrollbar-track": {
      background: VARIABLES.secondaryBgColor,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: VARIABLES.primaryColor,
      borderRadius: "10px",
      border: `3px solid ${VARIABLES.secondaryBgColor}`,
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused
      ? VARIABLES.primaryColor
      : VARIABLES.secondaryBgColor,
    color: state.isFocused ? VARIABLES.secondaryTextColor : VARIABLES.textColor,
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
    backgroundColor: `${VARIABLES.backgroundColor}`,
    cursor: "pointer",
    width: "145px",
    ...ellipsis,
    fontFamily: "Haskoy",
    fontSize: "12px",
    outline: "none",
    borderColor: state.isFocused
      ? `${VARIABLES.primaryColor}`
      : baseStyles.borderColor,
    boxShadow: state.isFocused
      ? `0 0 0 1px ${VARIABLES.primaryColor}`
      : baseStyles.boxShadow,
    "&:hover": {
      borderColor: `${VARIABLES.primaryColor}`,
    },
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: `${VARIABLES.secondaryBgColor}`,
    color: `${VARIABLES.textColor}`,
    overflow: "auto",
    msOverflowStyle: "none",
    scrollbarWidth: "thin",
    scrollbarColor: `${VARIABLES.primaryColor} ${VARIABLES.secondaryBgColor}`,
    "&::-webkit-scrollbar": {
      width: "12px",
    },
    "&::-webkit-scrollbar-track": {
      background: VARIABLES.secondaryBgColor,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: VARIABLES.primaryColor,
      borderRadius: "10px",
      border: `3px solid ${VARIABLES.secondaryBgColor}`,
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused
      ? VARIABLES.primaryColor
      : VARIABLES.secondaryBgColor,
    color: state.isFocused ? VARIABLES.secondaryTextColor : VARIABLES.textColor,
    cursor: "pointer",
    fontFamily: "Haskoy",
    fontSize: "12px",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: `${VARIABLES.primaryColor}`,
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    color: `${VARIABLES.textColor}`,
  }),
};

export const categoryStyle = {
  width: "180px",
  fontWeight: "600",
  ...ellipsis,
};

export const facultyStyle = {
  width: "130px",
  ...ellipsis,
};

export const timeStyle = {
  display: "flex",
  gap: "4px",
  alignItems: "center",
  width: "120px",
  ...ellipsis,
};

export const venueStyle = {
  display: "flex",
  gap: "4px",
  alignItems: "center",
  width: "280px",
  ...ellipsis,
};

export const idStyle = {
  width: "fit-content",
  marginRight: "4px",
  color: `${VARIABLES.primaryColor}`,
};

export const iconButtonStyle = {
  cursor: "pointer",
  fontSize: "14px",
  color: `${VARIABLES.primaryColor}`,
};

export const baseOtpStyle = {
  boxSizing: "border-box",
  width: "56px",
  height: "56px",
  marginRight: "12px",
  borderRadius: "8px",
  backgroundColor: VARIABLES.backgroundColor,
  border: `1px solid ${VARIABLES.darkTextColor}`,
  color: VARIABLES.textColor,
  fontSize: "20px",
};

export const mobileOtpStyle = {
  marginRight: "8px",
  width: "42px",
  height: "42px",
  fontSize: "14px",
};

export const errorStyle = {
  color: `${VARIABLES.darkTextColor}`,
  marginTop: "12px",
};
