import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from "../../utils/util-styled-components";

const CustomCheckbox = ({ isChecked, setChecked }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox
        checked={isChecked}
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
      />
      <StyledCheckbox />
    </CheckboxContainer>
  );
};

export default CustomCheckbox;
