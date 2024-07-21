import { useState } from "react";
import OtpInput from "react-otp-input";
import { errorStyle, otpStyle } from "../../utils/util-inline-styles";

const CustomOtpInput = ({ setLoginDisabled, otp, setOtp }) => {
  const [error, setError] = useState("");

  const handleChange = (otp) => {
    if (/^\d*$/.test(otp)) {
      setOtp(otp);
      setError("");
      if (otp.length === 6) {
        setLoginDisabled(false);
      } else {
        setLoginDisabled(true);
      }
    } else {
      setError("Please enter only numeric values");
    }
  };

  return (
    <div style={{ margin: "24px 0" }}>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
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
