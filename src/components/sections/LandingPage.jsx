import {
  HeroContainer,
  PageSection,
  HeaderText,
  HighlightText,
  ActionsWrapper,
  CustomLink,
  CustomBtn,
  BrandImage,
} from "../../utils/utils-web-styles";
import MultiPass from "../../assets/images/multi-pass-logo.svg";
import { handleRegister } from "../../utils/util-helper";

const LandingPage = () => {
  return (
    <PageSection>
      <HeroContainer>
        <BrandImage src={MultiPass} alt="multi-pass" />
        <HeaderText>
          Anything & everything artistic under{" "}
          <HighlightText>one subscription</HighlightText>
        </HeaderText>
        <ActionsWrapper>
          {/* <CustomLink>Notify me later</CustomLink> */}
          <CustomBtn onClick={handleRegister}>Register now</CustomBtn>
        </ActionsWrapper>
      </HeroContainer>
    </PageSection>
  );
};

export default LandingPage;
