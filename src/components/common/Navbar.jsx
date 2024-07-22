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
  const { openLogin, openRegister } = useLogin();
  const navigate = useNavigate();

  return (
    <CustomNav>
      <BrandImage
        src={BrandLogo}
        alt="revel-logo"
        onClick={() => navigate("/")}
      />
      <CustomBtn onClick={handleRegister}>Register now</CustomBtn>
      {false && (
        <>
          <button onClick={openLogin}>Login</button>
          <button onClick={openRegister}>Register</button>
        </>
      )}
    </CustomNav>
  );
};

export default Navbar;
