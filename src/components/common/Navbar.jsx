import {
  CustomNav,
  CustomBtn,
  BrandImage,
} from "../../utils/util-styled-components";
import BrandLogo from "../../assets/images/revel-logo.svg";
import { handleRegister } from "../../utils/util-helper";
import { useNavigate } from "react-router";
import { useLogin } from "../../contexts/LoginContext";

const Navbar = () => {
  const { openLogin } = useLogin();
  const navigate = useNavigate();

  return (
    <CustomNav>
      <BrandImage
        src={BrandLogo}
        alt="revel-logo"
        onClick={() => navigate("/")}
      />
      <CustomBtn onClick={handleRegister}>Register now</CustomBtn>
      <button style={{ display: "none" }} onClick={openLogin}></button>
    </CustomNav>
  );
};

export default Navbar;
