import { useEffect, useRef } from "react";
import { CustomBtn } from "../utils/util-styled-components";
import styled from "styled-components";
import { useNavigate } from "react-router";

export const FloatingBtn = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
`;
const BattleRegister = () => {
  const iframeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !document.querySelector(
        "script[src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js']"
      )
    ) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
      script.async = true;
      script.onload = () => {
        if (window.jotformEmbedHandler && iframeRef.current) {
          window.jotformEmbedHandler(
            `#${iframeRef.current.id}`,
            "https://form.jotform.com/"
          );
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <FloatingBtn>
        <CustomBtn onClick={() => navigate("/")}>Home</CustomBtn>
      </FloatingBtn>
      <iframe
        ref={iframeRef}
        id="JotFormIFrame-250791505694464"
        title="Back In Time Battle Registration Form"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/revelpass/battle-registration"
        frameBorder="0"
        style={{ width: "100%", height: "539px", border: "none" }}
        scrolling="no"
      ></iframe>
    </>
  );
};

export default BattleRegister;
