import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import {
  baseOtpStyle,
  errorStyle,
  mobileOtpStyle,
} from "../../utils/util-inline-styles";
import { OTP } from "../../constants/constants";

const getOtpStyle = () => {
  if (window.innerWidth <= 478) {
    return { ...baseOtpStyle, ...mobileOtpStyle };
  }
  return baseOtpStyle;
};

const CustomOtpInput = ({ setContinueDisabled, otp, setOtp }) => {
  const [error, setError] = useState("");
  const [otpStyle, setOtpStyle] = useState(getOtpStyle());

  const handleChange = (otp) => {
    if (/^\d*$/.test(otp)) {
      setOtp(otp);
      setError("");
      if (otp.length === OTP.length) {
        setContinueDisabled(false);
      } else {
        setContinueDisabled(true);
      }
    } else {
      setError("Please enter only numeric values");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setOtpStyle(getOtpStyle());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ margin: "24px 0" }}>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={OTP.length}
        isInputNum
        shouldAutoFocus
        renderInput={(props) => <input {...props} />}
        inputStyle={otpStyle}
      />
      {error && <div style={errorStyle}>{error}</div>}
    </div>
  );
};

export default CustomOtpInput;
