import { CustomNav, CustomBtn, BrandImage } from "../../utils/utils-web-styles";
import BrandLogo from "../../assets/images/revel-logo.svg";

const Navbar = () => {
  return (
    <CustomNav>
      <BrandImage src={BrandLogo} alt="revel-logo" />
      <CustomBtn>Register now</CustomBtn>
    </CustomNav>
  );
};

export default Navbar;
