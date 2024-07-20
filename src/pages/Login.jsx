import {
  BrandImage,
  ContainerText,
  CustomBtn,
  CustomInput,
  CustomLink,
  HeroText,
  HomePage,
  LoginContainer,
  WholePageSection,
} from "../utils/util-styled-components";
import BrandIcon from "../assets/images/revel-icon.svg";

const Login = () => {
  return (
    <HomePage>
      <WholePageSection>
        <LoginContainer>
          <BrandImage
            src={BrandIcon}
            alt="revel-icon"
            onClick={() => navigate("/")}
          />
          <HeroText>Log in to Revel</HeroText>
          <CustomInput placeholder="Phone" type="number"></CustomInput>
          <CustomBtn $width="100%">Login</CustomBtn>
          <ContainerText>
            Don't have an account? <CustomLink>Sign up</CustomLink>
          </ContainerText>
        </LoginContainer>
      </WholePageSection>
    </HomePage>
  );
};

export default Login;
