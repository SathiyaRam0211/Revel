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
        {/* responsive rule: no-wrap on desktop, allow wrap on small screens */}
        <style>{`
          .noWrapDesktop { white-space: nowrap; }
          @media (max-width: 768px) { .noWrapDesktop { white-space: normal; } }
        `}</style>

        <HeaderText>
          Cultivating arts and creativity{" "}
          <HighlightText>
            <span className="noWrapDesktop">
              Join our Dance classes and courses
            </span>
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
