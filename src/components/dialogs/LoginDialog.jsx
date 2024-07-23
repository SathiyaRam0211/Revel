import { useState } from "react";
import {
  ContainerText,
  CustomBtn,
  CustomInput,
  DialogContainer,
  BrandImage,
  ModalOverlay,
  CloseWrapper,
  ContainerImage,
  ContainerHeaderText,
  ContainerLink,
  ContainerIconWrapper,
  LeftSection,
  RightSection,
  CustomInputContainer,
  CustomInputPrefix,
} from "../../utils/util-styled-components";
import { useAuthentication } from "../../contexts/AuthenticationContext";
import BrandIcon from "../../assets/images/revel-icon.svg";
import MultiPassIcon from "../../assets/images/multi-pass-icon.svg";
import CloseIcon from "../../assets/images/close-icon.svg";
import { isMobileDevice, validatePhoneNumber } from "../../utils/util-helper";
import OtpSection from "../sections/OtpSection";
import { OTP } from "../../constants/constants";

const LoginDialog = () => {
  const { isLoginOpen, closeLogin, openRegister } = useAuthentication();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const [isOtpGenerated, setOtpGenerated] = useState(false);
  const [isResendEnabled, setResend] = useState(false);
  const [startCount, setStartCount] = useState(OTP.duration);

  const handleChange = (event) => {
    const entered = event.target.value;
    setPhoneNumber(entered);
    if (validatePhoneNumber(entered)) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const handleSubmit = () => {
    setOtpGenerated(true);
    setResend(false);
    setStartCount(OTP.duration);
  };

  const handleLogin = () => {
    closeLogin();
    setOtpGenerated(false);
    setPhoneNumber("");
  };

  const handleTimerExpire = () => {
    //handle expiry
    setResend(true);
  };

  const handleResend = () => {
    setStartCount(60);
    setResend(false);
  };

  if (!isLoginOpen) return null;
  return (
    <ModalOverlay>
      <DialogContainer $isVisible={isLoginOpen}>
        <LeftSection>
          <ContainerHeaderText>Welcome back!</ContainerHeaderText>
          <ContainerIconWrapper>
            <BrandImage src={BrandIcon} alt="revel-icon" />
            <BrandImage src={MultiPassIcon} alt="revel-icon" />
          </ContainerIconWrapper>
        </LeftSection>
        <RightSection>
          <CloseWrapper onClick={closeLogin}>
            <ContainerImage src={CloseIcon} alt="close-icon" />
          </CloseWrapper>
          <ContainerHeaderText>Log in</ContainerHeaderText>
          {!isOtpGenerated ? (
            <>
              <CustomInputContainer>
                <CustomInputPrefix>+91</CustomInputPrefix>
                <CustomInput
                  placeholder="Phone"
                  type="number"
                  value={phoneNumber}
                  onChange={handleChange}
                  autoFocus={!isMobileDevice()}
                  $paddingLeft="64px"
                />
              </CustomInputContainer>
              <ContainerText>
                You will receive an OTP on this mobile number
              </ContainerText>
              <div style={{ margin: "24px 0" }}>
                <CustomBtn $disabled={isBtnDisabled} onClick={handleSubmit}>
                  Log in
                </CustomBtn>
              </div>
            </>
          ) : (
            <OtpSection
              phoneNumber={phoneNumber}
              isResendEnabled={isResendEnabled}
              handleResend={handleResend}
              startCount={startCount}
              handleTimerExpire={handleTimerExpire}
              handleContinue={handleLogin}
            />
          )}
          <ContainerText>
            Don't have an account?{" "}
            <ContainerLink
              onClick={() => {
                closeLogin();
                openRegister();
              }}
            >
              Sign up
            </ContainerLink>
          </ContainerText>
        </RightSection>
      </DialogContainer>
    </ModalOverlay>
  );
};

export default LoginDialog;
