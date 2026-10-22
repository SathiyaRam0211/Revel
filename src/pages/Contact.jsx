import { useEffect } from "react";
import CustomNavbar from "../components/common/CustomNavbar";
import { CONTACT } from "../constants/constants";
import { handleRegister } from "../utils/util-helper";
import {
  HomePage,
  InfoContainer,
  InfoTitle,
  InfoText,
  ContactCard,
  ContactLabel,
  ContactValue,
  CustomBtn,
} from "../utils/util-styled-components";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Revel";
  }, []);

  return (
    <HomePage>
      <CustomNavbar />
      <InfoContainer>
        <InfoTitle>Contact Us</InfoTitle>
        <InfoText>
          Questions about classes, timings or fees? Reach us on any of the
          channels below and we will get back to you.
        </InfoText>
        <ContactCard>
          <div>
            <ContactLabel>Visit us</ContactLabel>
            <ContactValue>{CONTACT.address}</ContactValue>
          </div>
          <div>
            <ContactLabel>Call or WhatsApp</ContactLabel>
            <ContactValue
              as="a"
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            >
              {CONTACT.phone}
            </ContactValue>
          </div>
          <div>
            <ContactLabel>Email</ContactLabel>
            <ContactValue as="a" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </ContactValue>
          </div>
          <div>
            <ContactLabel>Hours</ContactLabel>
            <ContactValue>{CONTACT.hours}</ContactValue>
          </div>
        </ContactCard>
        <CustomBtn onClick={handleRegister}>Book Trial</CustomBtn>
      </InfoContainer>
    </HomePage>
  );
};

export default Contact;
