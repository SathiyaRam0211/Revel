import {
  HeroContainer,
  PageSection,
  HeaderText,
  HighlightText,
  CustomLink,
  CustomBtn,
  FlexWrapper,
} from "../../utils/util-styled-components";
import { handleRegister } from "../../utils/util-helper";
import { useNavigate } from "react-router";

const LandingSection = () => {
  const navigate = useNavigate();
  return (
    <PageSection>
      <HeroContainer>
        <HeaderText>
          Cultivating arts and creativity {" "}
          <HighlightText>Join our Dance classes and courses
            <br />
            For all ages
          </HighlightText>
        </HeaderText>
        <FlexWrapper $gap="24px">
          <CustomLink onClick={() => navigate("/schedule")}>
            View Schedule
          </CustomLink>
          <CustomBtn onClick={handleRegister}>Book Trial</CustomBtn>
        </FlexWrapper>
      </HeroContainer>
    </PageSection>
  );
};

export default LandingSection;
