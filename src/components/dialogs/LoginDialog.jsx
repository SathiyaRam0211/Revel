import React, { useState } from "react";
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
  ActionsWrapper,
} from "../../utils/util-styled-components";
import { useLogin } from "../../contexts/LoginContext";
import BrandIcon from "../../assets/images/revel-icon.svg";
import MultiPassIcon from "../../assets/images/multi-pass-icon.svg";
import CloseIcon from "../../assets/images/close-icon.svg";
import { validatePhoneNumber } from "../../utils/util-helper";
import CustomOtpInput from "../common/CustomOtpInput";
import CustomTimer from "../common/CustomTimer";

const LoginDialog = () => {
  const { isLoginOpen, closeLogin } = useLogin();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const [isOtpGenerated, setOtpGenerated] = useState(false);
  const [isResendEnabled, setResend] = useState(false);
  const [isLoginDisabled, setLoginDisabled] = useState(true);
  const [startCount, setStartCount] = useState(6);

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
    setStartCount(6);
  };

  const handleLogin = () => {
    closeLogin();
    setOtpGenerated(false);
    setPhoneNumber("");
    setOtp("");
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
          <ContainerIconWrapper onClick={() => navigate("/")}>
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
                  autoFocus
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
            <>
              <ContainerText>
                Verify with OTP sent to +91 {phoneNumber}
              </ContainerText>
              <CustomOtpInput
                otp={otp}
                setOtp={setOtp}
                setLoginDisabled={setLoginDisabled}
              />
              <ActionsWrapper>
                <ContainerLink
                  $disabled={!isResendEnabled}
                  onClick={handleResend}
                >
                  Resend OTP
                </ContainerLink>
                <CustomTimer
                  key={startCount}
                  startCount={startCount}
                  onExpire={handleTimerExpire}
                />
              </ActionsWrapper>
              <div style={{ margin: "24px 0" }}>
                <CustomBtn $disabled={isLoginDisabled} onClick={handleLogin}>
                  Continue
                </CustomBtn>
              </div>
            </>
          )}
          <ContainerText>
            Don't have an account? <ContainerLink>Sign up</ContainerLink>
          </ContainerText>
        </RightSection>
      </DialogContainer>
    </ModalOverlay>
  );
};

export default LoginDialog;
