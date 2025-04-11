import {
  HeroContainer,
  PageSection,
  HeaderText,
  HighlightText,
  CustomLink,
  CustomBtn,
  BrandImage,
  FlexWrapper,
} from "../../utils/util-styled-components";
import MultiPass from "../../assets/images/multi-pass-logo.svg";
import { handleRegister } from "../../utils/util-helper";
import { useNavigate } from "react-router";

const LandingSection = () => {
  const navigate = useNavigate();
  return (
    <PageSection>
      <HeroContainer>
        <BrandImage src={MultiPass} alt="multi-pass" />
        <HeaderText>
          Anything & everything artistic under{" "}
          <HighlightText>one subscription</HighlightText>
        </HeaderText>
        <FlexWrapper $gap="24px">
          <CustomLink onClick={() => navigate("/schedule")}>
            View Schedule
          </CustomLink>
          <CustomBtn onClick={handleRegister}>Register now</CustomBtn>
        </FlexWrapper>
      </HeroContainer>
    </PageSection>
  );
};

export default LandingSection;
