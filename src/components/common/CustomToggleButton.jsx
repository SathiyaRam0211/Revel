import {
  ToggleButton,
  ToggleContainer,
} from "../../utils/util-styled-components";

export const CustomToggleButton = ({ selected, setSelected }) => {
  return (
    <ToggleContainer>
      <ToggleButton $active={selected} onClick={() => setSelected(true)}>
        Yes
      </ToggleButton>
      <ToggleButton $active={!selected} onClick={() => setSelected(false)}>
        No
      </ToggleButton>
    </ToggleContainer>
  );
};
