import { useEffect, useState } from "react";
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
  FlexWrapper,
} from "../../utils/util-styled-components";
import { useAuthentication } from "../../contexts/AuthenticationContext";
// import BrandIcon from "../../assets/images/revel-icon.svg";
// import MultiPassDisabledIcon from "../../assets/images/multi-pass-disabled-icon.svg";
import BrandLogo from "../../assets/images/revel-logo.svg";
import CloseIcon from "../../assets/images/close-icon.svg";
import {
  isMobileDevice,
  validateEmail,
  validatePhoneNumber,
} from "../../utils/util-helper";
import OtpSection from "../sections/OtpSection";
import { OTP } from "../../constants/constants";
import CustomCheckbox from "../common/CustomCheckbox";

const RegisterDialog = () => {
  const { isRegisterOpen, closeRegister, openLogin } = useAuthentication();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isTermsAccepted, setTermsAccepted] = useState(false);
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const [isOtpGenerated, setOtpGenerated] = useState(false);
  const [isResendEnabled, setResend] = useState(false);
  const [startCount, setStartCount] = useState(OTP.duration);

  const handleSubmit = () => {
    setOtpGenerated(true);
    setResend(false);
    setStartCount(OTP.duration);
  };

  const handleRegister = () => {
    closeRegister();
    setOtpGenerated(false);
    setName("");
    setPhoneNumber("");
    setEmail("");
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
          <ContainerIconWrapper>
            {/* <BrandImage src={BrandIcon} alt="revel-icon" />
            <BrandImage src={MultiPassDisabledIcon} alt="revel-icon" /> */}
            <BrandImage src={BrandLogo} alt="revel-icon" />
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
                  autoFocus={!isMobileDevice()}
                />
              </CustomInputContainer>
              <div style={{ margin: "12px 0" }}>
                <CustomInputContainer>
                  <CustomInputPrefix>+91</CustomInputPrefix>
                  <CustomInput
                    $paddingLeft="64px"
                    placeholder="Phone"
                    type="number"
                    value={phoneNumber}
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                  />
                </CustomInputContainer>
                <ContainerText>
                  For sending class updates & reminders
                </ContainerText>
              </div>
              <div style={{ margin: "12px 0 24px" }}>
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
              <FlexWrapper $alignItems="center" $gap="12px">
                <CustomCheckbox
                  isChecked={isTermsAccepted}
                  setChecked={setTermsAccepted}
                />
                <ContainerText>
                  I have read and accept the{" "}
                  <ContainerLink>Terms and Conditions</ContainerLink>
                </ContainerText>
              </FlexWrapper>
              <div style={{ margin: "24px 0" }}>
                <CustomBtn $disabled={isBtnDisabled} onClick={handleSubmit}>
                  Create Account
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
              handleContinue={handleRegister}
            />
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
