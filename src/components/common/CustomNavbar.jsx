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
  NavLinks,
  NavItem,
} from "../../utils/util-styled-components";
import BrandLogo from "../../assets/images/revel-logo.svg";
import MenuIcon from "../../assets/images/menu-icon.svg";
import CloseIcon from "../../assets/images/close-icon.svg";
import { handleRegister } from "../../utils/util-helper";
import { NAV_LINKS } from "../../constants/constants";
import { useLocation, useNavigate } from "react-router";
import { useAuthentication } from "../../contexts/AuthenticationContext";
import { useEffect, useState } from "react";

const CustomNavbar = () => {
  const { openLogin, openRegister, openPreferences } = useAuthentication();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHidden = true;
  const isCompact = windowWidth <= 991;

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
    if (!navMenuOpen) return null;
    if (isHidden ? !isCompact : windowWidth > 478) return null;
    return (
      <ModalOverlay>
        <CustomMenu>
          <CloseWrapper onClick={() => setNavMenuOpen(false)}>
            <ContainerImage src={CloseIcon} alt="close-icon" />
          </CloseWrapper>
          {isHidden ? (
            <>
              {NAV_LINKS.map((link) => (
                <MenuItem
                  key={link.path}
                  onClick={() => {
                    setNavMenuOpen(false);
                    navigate(link.path);
                  }}
                >
                  {link.label}
                </MenuItem>
              ))}
              <MenuItem
                $isBtn
                onClick={() => {
                  setNavMenuOpen(false);
                  handleRegister();
                }}
              >
                Book Trial
              </MenuItem>
            </>
          ) : (
            <>
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
            </>
          )}
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
        {isHidden && !isCompact && (
          <NavLinks>
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.path}
                $active={pathname === link.path}
                onClick={() => navigate(link.path)}
              >
                {link.label}
              </NavItem>
            ))}
          </NavLinks>
        )}
        {isHidden && (
          <FlexWrapper $gap="16px" $alignItems="center">
            <CustomBtn onClick={handleRegister}>Book Trial</CustomBtn>
            {isCompact && (
              <BrandImage
                src={MenuIcon}
                onClick={() => setNavMenuOpen(true)}
                alt="menu-icon"
              />
            )}
          </FlexWrapper>
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
