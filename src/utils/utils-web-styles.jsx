import styled from "styled-components";
// import LandingBg from "../assets/images/landing-bg-web.svg";

const backgroundColor = "#222a2f";
const primaryColor = "#d4f465";
const textColor = "#ffffff";
const secondaryTextColor = "#02028b";
const highlightColor = "#81e0ff";

const mobileLarge = "max-width: 478px";
const tabletLarge = "max-width: 991px";

export const HomePage = styled.div`
  background: ${backgroundColor};
`;

export const CustomNav = styled.nav`
  background: ${backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 5;
  box-sizing: border-box;
  height: 120px;
  padding: 32px 64px;

  @media (${tabletLarge}) {
    height: 100px !important;
    padding: 16px 32px;
  }
`;

export const PageSection = styled.section`
  box-sizing: border-box;
  height: calc(100vh - 120px);
  padding: ${(props) => (props.$paddingY ? props.$paddingY : "32px")} 64px;
  border-bottom: 1px solid ${primaryColor};
  position: relative;

  @media (${tabletLarge}) {
    height: calc(100vh - 100px);
    padding: 16px 32px;
  }
`;

export const BrandImage = styled.img`
  height: 40px;

  @media (${tabletLarge}) {
    height: 32px;
  }

  @media (${mobileLarge}) {
    height: 24px;
  }
`;

export const HeroContainer = styled.div`
  box-sizing: border-box;
  padding: 60px 240px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${tabletLarge}) {
    padding: 64px 16px;
  }
`;

export const HeaderText = styled.h1`
  font-family: "Hepta Slab";
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  color: ${textColor};
  text-align: center;
  margin: 40px 0;

  @media (${tabletLarge}) {
    font-size: 36px;
    line-height: 42px;
  }

  @media (${mobileLarge}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const HighlightText = styled.span`
  font-family: "Hepta Slab";
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  color: ${highlightColor};

  @media (${tabletLarge}) {
    font-size: 36px;
    line-height: 42px;
  }

  @media (${mobileLarge}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

export const CustomBtn = styled.div`
  cursor: pointer;
  padding: 16px 32px;
  background: ${primaryColor};
  color: ${secondaryTextColor};
  font-size: 24px;
  font-weight: 600;
  border-radius: 12px;
  width: fit-content;

  @media (${tabletLarge}) {
    padding: 8px 16px;
    font-size: 20px;
  }

  @media (${mobileLarge}) {
    padding: 8px 16px;
    font-size: 16px;
  }
`;

export const CustomLink = styled.div`
  cursor: pointer;
  padding: 16px 32px;
  color: ${primaryColor};
  font-size: 24px;
  font-weight: 700;
  width: fit-content;

  @media (${mobileLarge}) {
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
  height: 585px;

  @media (${tabletLarge}) {
    width: 200px;
    height: 400px;
  }

  @media (${mobileLarge}) {
    width: 100%;
    height: 100%;
  }
`;
