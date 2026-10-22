import { useEffect } from "react";
import CustomNavbar from "../components/common/CustomNavbar";
import { POLICIES } from "../constants/policies";
import {
  HomePage,
  InfoContainer,
  InfoTitle,
  InfoUpdated,
  InfoHeading,
  InfoText,
  InfoList,
} from "../utils/util-styled-components";

const Policy = ({ type }) => {
  const policy = POLICIES[type];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${policy.title} | Revel`;
  }, [policy]);

  return (
    <HomePage>
      <CustomNavbar />
      <InfoContainer>
        <InfoTitle>{policy.title}</InfoTitle>
        <InfoUpdated>Last updated: {policy.updated}</InfoUpdated>
        {policy.sections.map((section) => (
          <section key={section.heading}>
            <InfoHeading>{section.heading}</InfoHeading>
            {section.body?.map((text) => (
              <InfoText key={text}>{text}</InfoText>
            ))}
            {section.list && (
              <InfoList>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </InfoList>
            )}
          </section>
        ))}
      </InfoContainer>
    </HomePage>
  );
};

export default Policy;
