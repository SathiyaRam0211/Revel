import {
  Nav,
  CustomBtn,
  BrandImage,
  CustomLink,
  FlexWrapper,
  CustomMenu,
  ModalOverlay,
  CloseWrapper,
  MenuItem,
  ContainerImage,
} from "../../utils/util-styled-components";
import BrandLogo from "../../assets/images/revel-logo.svg";
import MenuIcon from "../../assets/images/menu-icon.svg";
import CloseIcon from "../../assets/images/close-icon.svg";
import { useNavigate } from "react-router";
import { useAuthentication } from "../../contexts/AuthenticationContext";
import { useEffect, useState } from "react";

const CustomNavbar = () => {
  const { openLogin, openRegister, openPreferences } = useAuthentication();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isHidden = true;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const NavMenu = () => {
    if (!navMenuOpen || windowWidth > 478) return null;
    return (
      <ModalOverlay>
        <CustomMenu>
          <CloseWrapper onClick={() => setNavMenuOpen(false)}>
            <ContainerImage src={CloseIcon} alt="close-icon" />
          </CloseWrapper>
          <MenuItem
            $isBtn
            onClick={() => {
              setNavMenuOpen(false);
              openRegister();
            }}
          >
            Register
          </MenuItem>
          <MenuItem
            onClick={() => {
              setNavMenuOpen(false);
              openLogin();
            }}
          >
            Login
          </MenuItem>
        </CustomMenu>
      </ModalOverlay>
    );
  };

  return (
    <>
      <NavMenu />
      <Nav>
        <BrandImage
          src={BrandLogo}
          alt="revel-logo"
          onClick={() => navigate("/")}
        />
        {isHidden && (
          <CustomBtn onClick={() => navigate("/register")}>
            Register for BackInTime
          </CustomBtn>
        )}
        {!isHidden &&
          (windowWidth <= 478 ? (
            <>
              <BrandImage
                src={MenuIcon}
                onClick={() => {
                  setNavMenuOpen(true);
                }}
                alt="menu-icon"
              />
            </>
          ) : (
            <FlexWrapper $gap="12px">
              <CustomLink onClick={openPreferences}>Preferences</CustomLink>
              <CustomLink onClick={openLogin}>Login</CustomLink>
              <CustomBtn onClick={openRegister}>Register</CustomBtn>
            </FlexWrapper>
          ))}
      </Nav>
    </>
  );
};

export default CustomNavbar;
