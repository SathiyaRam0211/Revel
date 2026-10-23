import { useEffect } from "react";
import CustomNavbar from "../components/common/CustomNavbar";
import { POLICIES } from "../constants/policies";
import {
  HomePage,
  InfoContainer,
  InfoTitle,
  InfoUpdated,
  InfoHeading,
  InfoSubheading,
  InfoText,
  InfoList,
} from "../utils/util-styled-components";

const Labelled = ({ label, text }) => (
  <>
    {label && <strong>{label}</strong>} {text}
  </>
);

const Block = ({ block }) => {
  if (block.sub) return <InfoSubheading>{block.sub}</InfoSubheading>;
  if (block.list) {
    return (
      <InfoList>
        {block.list.map((item, i) => (
          <li key={i}>
            {typeof item === "string" ? item : <Labelled {...item} />}
          </li>
        ))}
      </InfoList>
    );
  }
  return (
    <InfoText>
      <Labelled label={block.label} text={block.p} />
    </InfoText>
  );
};

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
        <InfoUpdated>Effective Date: {policy.effective}</InfoUpdated>
        {policy.intro.map((text) => (
          <InfoText key={text}>{text}</InfoText>
        ))}
        {policy.sections.map((section) => (
          <section key={section.heading}>
            <InfoHeading>{section.heading}</InfoHeading>
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </section>
        ))}
      </InfoContainer>
    </HomePage>
  );
};

export default Policy;
