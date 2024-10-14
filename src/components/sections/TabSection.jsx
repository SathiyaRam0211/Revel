import { useState } from "react";
import { TABS } from "../../constants/constants";
import { Tab } from "../../utils/util-styled-components";

const TabSection = ({ setSelectedOption }) => {
  const [selectedArtForm, setSelectedArtForm] = useState("all");
  return (
    <div>
      {TABS.map((eachArtForm, index) => (
        <Tab
          key={`${eachArtForm.value}-${index}`}
          $active={eachArtForm.value === selectedArtForm}
          onClick={() => {
            setSelectedOption(eachArtForm);
            setSelectedArtForm(eachArtForm.value);
          }}
        >
          <span>{eachArtForm.label}</span>
        </Tab>
      ))}
    </div>
  );
};

export default TabSection;
