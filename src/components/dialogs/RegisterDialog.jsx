import React, { useEffect, useState } from "react";
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
import MultiPassDisabledIcon from "../../assets/images/multi-pass-disabled-icon.svg";
import CloseIcon from "../../assets/images/close-icon.svg";
import { validateEmail, validatePhoneNumber } from "../../utils/util-helper";
import CustomOtpInput from "../common/CustomOtpInput";
import CustomTimer from "../common/CustomTimer";

const RegisterDialog = () => {
  const { isRegisterOpen, closeRegister, openLogin } = useLogin();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const [isOtpGenerated, setOtpGenerated] = useState(false);
  const [isResendEnabled, setResend] = useState(false);
  const [isLoginDisabled, setLoginDisabled] = useState(true);
  const [startCount, setStartCount] = useState(6);

  const handleSubmit = () => {
    setOtpGenerated(true);
    setResend(false);
    setStartCount(6);
  };

  const handleRegister = () => {
    closeRegister();
    setOtpGenerated(false);
    setName("");
    setPhoneNumber("");
    setEmail("");
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

  useEffect(() => {
    if (name !== null && email !== null && phoneNumber !== null) {
      setBtnDisabled(true);
      if (
        name !== null &&
        validateEmail(email) &&
        validatePhoneNumber(phoneNumber)
      ) {
        setBtnDisabled(false);
      }
    }
  }, [name, email, phoneNumber]);

  if (!isRegisterOpen) return null;
  return (
    <ModalOverlay>
      <DialogContainer $isVisible={isRegisterOpen}>
        <LeftSection>
          <ContainerHeaderText>Welcome!</ContainerHeaderText>
          <ContainerIconWrapper onClick={() => navigate("/")}>
            <BrandImage src={BrandIcon} alt="revel-icon" />
            <BrandImage src={MultiPassDisabledIcon} alt="revel-icon" />
          </ContainerIconWrapper>
        </LeftSection>
        <RightSection>
          <CloseWrapper onClick={closeRegister}>
            <ContainerImage src={CloseIcon} alt="close-icon" />
          </CloseWrapper>
          <ContainerHeaderText>Register</ContainerHeaderText>
          {!isOtpGenerated ? (
            <>
              <CustomInputContainer>
                <CustomInput
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  autoFocus
                />
              </CustomInputContainer>
              <div style={{ margin: "12px 0" }}>
                <CustomInputContainer>
                  <CustomInputPrefix>+91</CustomInputPrefix>
                  <CustomInput
                    $marginRight="64px"
                    placeholder="Phone"
                    type="number"
                    value={phoneNumber}
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                  />
                </CustomInputContainer>
                <ContainerText>
                  We will be using this for sending class updates & reminders
                </ContainerText>
              </div>
              <div style={{ margin: "12px 0" }}>
                <CustomInputContainer>
                  <CustomInput
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </CustomInputContainer>
                <ContainerText>
                  For sending updates via email notifications
                </ContainerText>
              </div>
              <div style={{ margin: "24px 0" }}>
                <CustomBtn $disabled={isBtnDisabled} onClick={handleSubmit}>
                  Create Account
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
                <CustomBtn $disabled={isLoginDisabled} onClick={handleRegister}>
                  Continue
                </CustomBtn>
              </div>
            </>
          )}
          <ContainerText>
            Already have an account?{" "}
            <ContainerLink
              onClick={() => {
                closeRegister();
                openLogin();
              }}
            >
              Login
            </ContainerLink>
          </ContainerText>
        </RightSection>
      </DialogContainer>
    </ModalOverlay>
  );
};

export default RegisterDialog;
