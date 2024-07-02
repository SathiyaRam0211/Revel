import { CustomNav, CustomBtn, BrandImage } from "../../utils/utils-web-styles";
import BrandLogo from "../../assets/images/revel-logo.svg";
import { handleRegister } from "../../utils/util-helper";

const Navbar = () => {
  return (
    <CustomNav>
      <BrandImage src={BrandLogo} alt="revel-logo" />
      <CustomBtn onClick={handleRegister}>Register now</CustomBtn>
    </CustomNav>
  );
};

export default Navbar;
