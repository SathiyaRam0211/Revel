import ReactSelect from "react-select";
import { multiSelectStyle } from "../../utils/util-inline-styles";
import { Ellipsis } from "../../utils/util-styled-components";

const ValueContainer = ({ children, ...props }) => {
  const { getValue } = props;
  const selectedValues = getValue();
  const displayValues = selectedValues.slice(0, 2);
  const moreCount = selectedValues.length - displayValues.length;
  return (
    <components.ValueContainer {...props}>
      {displayValues.map((val, index) => (
        <components.SingleValue key={index} {...props}>
          {val.label}
        </components.SingleValue>
      ))}
      {moreCount > 0 && <Ellipsis>...</Ellipsis>}
      {React.cloneElement(children[1])}
    </components.ValueContainer>
  );
};

const CustomMultiSelect = ({ options, onChange, placeholder }) => {
  return (
    <ReactSelect
      styles={multiSelectStyle}
      options={options}
      closeMenuOnSelect={false}
      components={ValueContainer}
      placeholder={placeholder}
      onChange={onChange}
      isMulti
    />
  );
};

export default CustomMultiSelect;
