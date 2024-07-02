import {
  HeroContainer,
  PageSection,
  HeaderText,
  HighlightText,
  ActionsWrapper,
  CustomLink,
  CustomBtn,
  BrandImage,
} from "../../utils/util-styled-components";
import MultiPass from "../../assets/images/multi-pass-logo.svg";
import { handleRegister } from "../../utils/util-helper";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <PageSection>
      <HeroContainer>
        <BrandImage src={MultiPass} alt="multi-pass" />
        <HeaderText>
          Anything & everything artistic under{" "}
          <HighlightText>one subscription</HighlightText>
        </HeaderText>
        <ActionsWrapper>
          <CustomLink onClick={() => navigate("/schedule")}>
            View Schedule
          </CustomLink>
          <CustomBtn onClick={handleRegister}>Register now</CustomBtn>
        </ActionsWrapper>
      </HeroContainer>
    </PageSection>
  );
};

export default LandingPage;
