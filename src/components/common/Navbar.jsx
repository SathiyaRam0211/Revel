import {
  CustomNav,
  CustomBtn,
  BrandImage,
} from "../../utils/util-styled-components";
import BrandLogo from "../../assets/images/revel-logo.svg";
import { handleRegister } from "../../utils/util-helper";
import { useNavigate } from "react-router";
import { useAuthentication } from "../../contexts/AuthenticationContext";

const Navbar = () => {
  const { openLogin, openRegister } = useAuthentication();
  const navigate = useNavigate();
  const isHidden = true;

  return (
    <CustomNav>
      <BrandImage
        src={BrandLogo}
        alt="revel-logo"
        onClick={() => navigate("/")}
      />
      <CustomBtn onClick={handleRegister}>Register now</CustomBtn>
      {!isHidden && (
        <>
          <button onClick={openLogin}>Login</button>
          <button onClick={openRegister}>Register</button>
        </>
      )}
    </CustomNav>
  );
};

export default Navbar;
