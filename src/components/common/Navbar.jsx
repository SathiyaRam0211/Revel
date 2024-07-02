import {
  CustomNav,
  CustomBtn,
  BrandImage,
} from "../../utils/util-styled-components";
import BrandLogo from "../../assets/images/revel-logo.svg";
import { handleRegister } from "../../utils/util-helper";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <CustomNav>
      <BrandImage
        src={BrandLogo}
        alt="revel-logo"
        onClick={() => navigate("/")}
      />
      <CustomBtn onClick={handleRegister}>Register now</CustomBtn>
    </CustomNav>
  );
};

export default Navbar;
