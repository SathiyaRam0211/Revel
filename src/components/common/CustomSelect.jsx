import ReactSelect from "react-select";
import { selectStyle } from "../../utils/util-inline-styles";

const CustomSelect = ({ options, onChange, placeholder }) => {
  return (
    <ReactSelect
      isClearable
      isSearchable
      styles={selectStyle}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default CustomSelect;
