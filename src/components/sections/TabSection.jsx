import { useState } from "react";
import { TABS } from "../../constants/constants";
import { Tab } from "../../utils/util-styled-components";

const TabSection = ({ setSelectedOption }) => {
  const [selectedArtForm, setSelectedArtForm] = useState("all");
  return (
    <>
      {TABS.map((eachArtForm) => (
        <Tab
          $active={eachArtForm.value === selectedArtForm}
          onClick={() => {
            setSelectedOption(eachArtForm.value === "all" ? null : eachArtForm);
            setSelectedArtForm(eachArtForm.value);
          }}
        >
          <span>{eachArtForm.label}</span>
        </Tab>
      ))}
    </>
  );
};

export default TabSection;
