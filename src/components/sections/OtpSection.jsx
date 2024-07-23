import { useState } from "react";
import {
  ActionsWrapper,
  ContainerLink,
  ContainerText,
  CustomBtn,
} from "../../utils/util-styled-components";
import CustomOtpInput from "../common/CustomOtpInput";
import CustomTimer from "../common/CustomTimer";

const OtpSection = ({
  phoneNumber,
  isResendEnabled,
  handleResend,
  startCount,
  handleTimerExpire,
  handleContinue,
}) => {
  const [otp, setOtp] = useState("");
  const [isContinueDisabled, setContinueDisabled] = useState(true);

  return (
    <>
      <ContainerText>Verify with OTP sent to +91 {phoneNumber}</ContainerText>
      <CustomOtpInput
        otp={otp}
        setOtp={setOtp}
        setContinueDisabled={setContinueDisabled}
      />
      <ActionsWrapper $maxWidth="396px">
        <ContainerLink $disabled={!isResendEnabled} onClick={handleResend}>
          Resend OTP
        </ContainerLink>
        <CustomTimer
          key={startCount}
          startCount={startCount}
          onExpire={handleTimerExpire}
        />
      </ActionsWrapper>
      <div style={{ margin: "24px 0" }}>
        <CustomBtn
          $disabled={isContinueDisabled}
          onClick={() => {
            handleContinue();
            setOtp("");
          }}
        >
          Continue
        </CustomBtn>
      </div>
    </>
  );
};

export default OtpSection;
