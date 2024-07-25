import { useEffect, useState } from "react";
import {
  ContainerText,
  FlexWrapper,
  Slider,
  SliderContainer,
} from "../../utils/util-styled-components";

const CustomSlider = ({ min = 1, max = 100, value, setValue }) => {
  const [selectedWidth, setSelectedWidth] = useState(0);

  const getWidth = (current) => {
    return ((current - min) / (max - min)) * 100;
  };

  useEffect(() => {
    if (value && value !== 0) {
      if (value > 40) {
        setValue(40);
        setSelectedWidth(getWidth(40));
      } else setSelectedWidth(getWidth(value));
    } else setSelectedWidth(0);
  }, [value]);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setValue(Number(selectedValue));
  };

  return (
    <SliderContainer>
      <Slider
        type="range"
        min={min}
        max={max}
        value={value}
        $width={selectedWidth}
        onChange={handleChange}
      />
      <FlexWrapper
        style={{ marginTop: "12px" }}
        $alignItems="center"
        $justifyContent="space-between"
      >
        <ContainerText>{min}</ContainerText>
        <ContainerText>{max} kms</ContainerText>
      </FlexWrapper>
    </SliderContainer>
  );
};

export default CustomSlider;
