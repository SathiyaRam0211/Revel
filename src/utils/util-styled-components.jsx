import styled, { keyframes } from "styled-components";
import { VARIABLES } from "../constants/constants";

export const HomePage = styled.div`
  background: ${VARIABLES.backgroundColor};
`;

export const CustomNav = styled.nav`
  background: ${VARIABLES.secondaryBgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 1;
  box-sizing: border-box;
  height: 120px;
  padding: 32px 64px;

  @media (${VARIABLES.tabletLarge}) {
    height: 100px !important;
    padding: 12px 24px;
  }
`;

export const PageSection = styled.section`
  box-sizing: border-box;
  height: calc(var(--vh, 1vh) * 100 - 120px);
  padding: ${(props) => (props.$paddingY ? props.$paddingY : "32px")}
    ${(props) => (props.$paddingX ? props.$paddingX : "64px")};
  position: relative;

  @media (${VARIABLES.tabletLarge}) {
    height: calc(var(--vh, 1vh) * 100 - 100px);
    padding: 12px 24px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${VARIABLES.backgroundColor};
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  border-radius: 0px 24px 0px 0px;
`;

export const BrandImage = styled.img`
  cursor: pointer;
  height: 40px;

  @media (${VARIABLES.tabletLarge}) {
    height: 32px;
  }

  @media (${VARIABLES.mobileLarge}) {
    height: 24px;
  }
`;

export const ContainerImage = styled.img`
  cursor: pointer;
  height: 20px;

  @media (${VARIABLES.tabletLarge}) {
    height: 16px;
  }
`;

export const HeroContainer = styled.div`
  box-sizing: border-box;
  padding: 60px 240px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${VARIABLES.desktopSmall}) {
    padding: 64px 120px;
  }

  @media (${VARIABLES.tabletLarge}) {
    padding: 64px 16px;
  }
`;

export const HeroText = styled.div`
  font-family: ${VARIABLES.headerFont};
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: ${VARIABLES.textColor};
  display: flex;
  align-items: center;
  gap: 8px;

  @media (${VARIABLES.tabletLarge}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const HeaderText = styled.h1`
  font-family: ${VARIABLES.headerFont};
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: ${VARIABLES.textColor};
  text-align: center;
  margin: 40px 0;

  @media (${VARIABLES.desktopSmall}) {
    font-size: 42px;
    line-height: 50px;
  }

  @media (${VARIABLES.tabletLarge}) {
    font-size: 32px;
    line-height: 40px;
  }

  @media (${VARIABLES.mobileLarge}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const HighlightText = styled.span`
  font-family: ${VARIABLES.headerFont};
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: ${VARIABLES.highlightColor};

  @media (${VARIABLES.desktopSmall}) {
    font-size: 42px;
    line-height: 50px;
  }

  @media (${VARIABLES.tabletLarge}) {
    font-size: 36px;
    line-height: 42px;
  }

  @media (${VARIABLES.mobileLarge}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : "none")};

  @media (${VARIABLES.mobileLarge}) {
    gap: 8px;
    max-width: ${(props) => (props.$maxWidth ? "292px" : "none")};
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$direction ? props.$direction : "row")};
  align-items: ${(props) =>
    props.$alignItems ? props.$alignItems : "flex-start"};
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : "flex-start"};
  gap: ${(props) => (props.$gap ? props.$gap : "0px")};
`;

export const CustomBtn = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 32px;
  background: ${VARIABLES.primaryColor};
  color: ${VARIABLES.secondaryTextColor};
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};
  opacity: ${(props) => (props.$disabled ? "0.5" : "none")};
  font-size: 24px;
  font-weight: 600;
  border-radius: 12px;
  width: ${(props) => (props.$width ? props.$width : "fit-content")};
  max-width: 360px;
  text-align: center;

  &:hover {
    background: ${VARIABLES.gradient};
  }

  @media (${VARIABLES.tabletLarge}) {
    padding: 8px 16px;
    font-size: 20px;
  }

  @media (${VARIABLES.mobileLarge}) {
    padding: 8px 16px;
    font-size: 16px;
  }
`;

export const CustomLink = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 32px;
  color: ${VARIABLES.primaryColor};
  font-size: 24px;
  font-weight: 700;
  width: fit-content;

  &:hover {
    color: transparent;
    background: ${VARIABLES.gradient};
    -webkit-background-clip: text;
    background-clip: text;
  }

  @media (${VARIABLES.mobileLarge}) {
    padding: 0px 8px;
    font-size: 16px;
  }
`;

export const AnnouncementContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnnouncementVideo = styled.video`
  position: absolute;
  bottom: 0;
  width: 300px;
  height: 587px;

  @media (${VARIABLES.tabletLarge}) {
    width: 240px;
    height: 510px;
  }

  @media (${VARIABLES.mobileLarge}) {
    width: 100vw;
    height: calc(100vh - 100px);
  }
`;

export const EventContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: fit-content;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const EventsWrapper = styled.div`
  margin: 16px 0;
  max-height: calc(100% - 64px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: ${VARIABLES.secondaryBgColor};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${VARIABLES.primaryColor};
    border-radius: 10px;
    border: 3px solid ${VARIABLES.secondaryBgColor};
  }
  scrollbar-color: ${VARIABLES.primaryColor} ${VARIABLES.secondaryBgColor};
  scrollbar-width: thin;
`;

export const DayHeader = styled.div`
  span {
    font-size: 16px;
    color: transparent;
    background: ${VARIABLES.gradient};
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export const EventRow = styled.div`
  margin: 8px 8px 8px 0;
  padding: 8px 16px;
  border-radius: 12px;
  background: ${VARIABLES.secondaryBgColor};
  opacity: ${(props) => (props.$isComplete ? 0.5 : 1)};
  pointer-events: ${(props) => (props.$isComplete ? "none" : "auto")};
  color: ${VARIABLES.textColor};
  display: flex;
  align-items: center;
  gap: 32px;
  width: fit-content;
  div,
  span {
    display: flex;
    gap: 8px;
    font-size: 14px;
  }
  @media (${VARIABLES.tabletLarge}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 14px;
    div {
      gap: 0px;
    }
  }
`;

export const DialogContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 75%;
  height: 75%;
  display: flex;
  align-items: center;
  animation: ${(props) => (props.$isVisible ? scaleIn : scaleOut)} 0.3s ease-out;

  @media (${VARIABLES.tabletLarge}) {
    flex-direction: column;
    width: 90%;
    height: 90%;
  }

  @media (${VARIABLES.mobileLarge}) {
    width: 100%;
    height: 100%;
  }
`;

export const LeftSection = styled.div`
  box-sizing: border-box;
  border-radius: 24px 0px 0px 24px;
  height: 100%;
  background: ${VARIABLES.backgroundColor};
  padding: 32px;
  width: 40%;
  position: relative;

  @media (${VARIABLES.tabletLarge}) {
    padding: 24px;
    height: 20%;
    width: 100%;
    border-radius: 24px 24px 0px 0px;
  }

  @media (${VARIABLES.mobileLarge}) {
    height: 30%;
    border-radius: 0px;
  }
`;

export const RightSection = styled.div`
  box-sizing: border-box;
  border-radius: 0px 24px 24px 0px;
  height: 100%;
  background: ${VARIABLES.secondaryBgColor};
  padding: 32px;
  width: 60%;

  @media (${VARIABLES.tabletLarge}) {
    padding: 24px;
    height: 80%;
    width: 100%;
    border-radius: 0px 0px 24px 24px;
  }

  @media (${VARIABLES.mobileLarge}) {
    height: 70%;
    border-radius: 0px;
  }
`;

export const CustomInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const CustomInput = styled.input`
  box-sizing: border-box;
  margin: 8px 0;
  padding: 16px 24px 16px
    ${(props) => (props.$paddingLeft ? props.$paddingLeft : "24px")};
  background: ${VARIABLES.backgroundColor};
  border: 1px solid ${VARIABLES.darkTextColor}50;
  border-radius: 12px;
  font-size: 24px;
  line-height: 32px;
  color: ${VARIABLES.textColor};
  outline: 1px solid ${VARIABLES.darkTextColor}50;
  width: 100%;
  max-width: 520px;
  letter-spacing: 1px;

  &:focus {
    border-color: ${VARIABLES.textColor};
  }

  @media (${VARIABLES.tabletLarge}) {
    font-size: 20px;
    line-height: 28px;
  }

  @media (${VARIABLES.mobileLarge}) {
    font-size: 16px;
    line-height: 24px;
    padding: 12px 16px 12px ${(props) => (props.$paddingLeft ? "48px" : "16px")};
  }
`;

export const CustomInputPrefix = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: ${VARIABLES.lightTextColor};
  pointer-events: none;
  font-size: 24px;
  line-height: 32px;

  @media (${VARIABLES.tabletLarge}) {
    font-size: 20px;
    line-height: 28px;
  }

  @media (${VARIABLES.mobileLarge}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ContainerHeaderText = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 24px;
  color: ${VARIABLES.textColor};

  @media (${VARIABLES.tabletLarge}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 16px;
  }
`;

export const ContainerText = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${VARIABLES.lightTextColor};

  @media (${VARIABLES.mobileLarge}) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ContainerLink = styled.span`
  box-sizing: border-box;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  width: fit-content;
  color: transparent;
  background: ${VARIABLES.gradient};
  opacity: ${(props) => (props.$disabled ? "0.5" : "none")};
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};
  -webkit-background-clip: text;
  background-clip: text;

  @media (${VARIABLES.mobileLarge}) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ContainerIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (${VARIABLES.tabletLarge}) {
    top: 60%;
  }
`;

export const Ellipsis = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 4px;
`;

export const CheckboxContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const StyledCheckbox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 2px solid ${VARIABLES.darkTextColor}50;
  background: ${VARIABLES.backgroundColor};
  border-radius: 4px;
  z-index: 1;

  ${HiddenCheckbox}:checked + & {
    background: ${VARIABLES.gradient};
    border: none;
  }

  ${HiddenCheckbox}:checked + &::after {
    content: "";
    position: absolute;
    left: 7px;
    top: 4px;
    width: 4px;
    height: 8px;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const scaleOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
`;
