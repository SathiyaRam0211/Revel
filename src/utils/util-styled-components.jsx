import styled from "styled-components";
import { variables } from "../constants/constants";

export const HomePage = styled.div`
  background: ${variables.backgroundColor};
`;

export const CustomNav = styled.nav`
  background: ${variables.secondaryBgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 5;
  box-sizing: border-box;
  height: 120px;
  padding: 32px 64px;

  @media (${variables.tabletLarge}) {
    height: 100px !important;
    padding: 12px 24px;
  }
`;

export const PageSection = styled.section`
  box-sizing: border-box;
  height: calc(100vh - 120px);
  padding: ${(props) => (props.$paddingY ? props.$paddingY : "32px")}
    ${(props) => (props.$paddingX ? props.$paddingX : "64px")};
  position: relative;

  @media (${variables.tabletLarge}) {
    height: calc(100vh - 100px);
    padding: 12px 24px;
  }
`;

export const BrandImage = styled.img`
  cursor: pointer;
  height: 40px;

  @media (${variables.tabletLarge}) {
    height: 32px;
  }

  @media (${variables.mobileLarge}) {
    height: 24px;
  }
`;

export const HeroContainer = styled.div`
  box-sizing: border-box;
  padding: 60px 240px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${variables.desktopSmall}) {
    padding: 64px 120px;
  }

  @media (${variables.tabletLarge}) {
    padding: 64px 16px;
  }
`;

export const HeroText = styled.h3`
  font-family: ${variables.headerFont};
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: ${variables.textColor};
  margin: 0px;

  @media (${variables.tabletLarge}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const HeaderText = styled.h1`
  font-family: ${variables.headerFont};
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: ${variables.textColor};
  text-align: center;
  margin: 40px 0;

  @media (${variables.desktopSmall}) {
    font-size: 42px;
    line-height: 50px;
  }

  @media (${variables.tabletLarge}) {
    font-size: 32px;
    line-height: 40px;
  }

  @media (${variables.mobileLarge}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const HighlightText = styled.span`
  font-family: ${variables.headerFont};
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: ${variables.highlightColor};

  @media (${variables.desktopSmall}) {
    font-size: 42px;
    line-height: 50px;
  }

  @media (${variables.tabletLarge}) {
    font-size: 36px;
    line-height: 42px;
  }

  @media (${variables.mobileLarge}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (${variables.mobileLarge}) {
    gap: 8px;
  }
`;

export const CustomBtn = styled.div`
  cursor: pointer;
  padding: 16px 32px;
  background: ${variables.primaryColor};
  color: ${variables.secondaryTextColor};
  font-size: 24px;
  font-weight: 600;
  border-radius: 12px;
  width: fit-content;

  &:hover {
    background: ${variables.gradient};
  }

  @media (${variables.tabletLarge}) {
    padding: 8px 16px;
    font-size: 20px;
  }

  @media (${variables.mobileLarge}) {
    padding: 8px 16px;
    font-size: 16px;
  }
`;

export const CustomLink = styled.div`
  cursor: pointer;
  padding: 16px 32px;
  color: ${variables.primaryColor};
  font-size: 24px;
  font-weight: 700;
  width: fit-content;

  &:hover {
    color: transparent;
    background: ${variables.gradient};
    -webkit-background-clip: text;
    background-clip: text;
  }

  @media (${variables.mobileLarge}) {
    padding: 8px 16px;
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

  @media (${variables.tabletLarge}) {
    width: 240px;
    height: 510px;
  }

  @media (${variables.mobileLarge}) {
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
  gap: 50px;
`;

export const EventsWrapper = styled.div`
  margin: 16px 0;
  max-height: calc(100% - 64px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: ${variables.secondaryBgColor};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${variables.primaryColor};
    border-radius: 10px;
    border: 3px solid ${variables.secondaryBgColor};
  }
  scrollbar-color: ${variables.primaryColor} ${variables.secondaryBgColor};
  scrollbar-width: thin;
`;

export const DayHeader = styled.div`
  span {
    font-size: 16px;
    color: transparent;
    background: ${variables.gradient};
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export const EventRow = styled.div`
  margin: 8px 8px 8px 0;
  padding: 8px 16px;
  border-radius: 12px;
  background: ${variables.secondaryBgColor};
  opacity: ${(props) => (props.$isComplete ? 0.7 : 1)};
  pointer-events: ${(props) => (props.$isComplete ? "none" : "auto")};
  color: ${variables.textColor};
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
  @media (${variables.tabletLarge}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 14px;
    div {
      gap: 0px;
    }
  }
`;

export const Ellipsis = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 4px;
`;
