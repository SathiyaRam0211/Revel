import { useCallback, useEffect, useState } from "react";
import {
  DialogContainer,
  ModalOverlay,
  DialogHeader,
  DialogBody,
  FlexWrapper,
  ContainerText,
  Separator,
  ContainerHeaderText,
  DialogFooter,
  CustomBtn,
  CustomLink,
  CustomInput,
} from "../../utils/util-styled-components";
import { useAuthentication } from "../../contexts/AuthenticationContext";
import CustomSlider from "../common/CustomSlider";
import { CustomToggleButton } from "../common/CustomToggleButton";
import { isMobileDevice } from "../../utils/util-helper";

const PreferencesDialog = () => {
  const { isPreferencesOpen, closePreferences } = useAuthentication();
  const steps = 4;
  const [currentStep, setCurrentStep] = useState(1);
  const [location, setLocation] = useState("");
  const [pincode, setPincode] = useState("");
  const [distance, setDistance] = useState(10);
  const [prefersOnline, setPrefersOnline] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const renderStep = useCallback(() => {
    switch (currentStep) {
      case 1:
        return (
          <>
            {windowWidth > 478 ? (
              <FlexWrapper $alignItems="center" $gap="24px">
                <CustomInput
                  id="location"
                  placeholder="Current location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  autoFocus={!isMobileDevice()}
                ></CustomInput>
                <CustomInput
                  id="pincode"
                  placeholder="Current pincode"
                  value={pincode}
                  onChange={(event) => setPincode(event.target.value)}
                ></CustomInput>
              </FlexWrapper>
            ) : (
              <>
                <CustomInput
                  id="location"
                  placeholder="Current location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  autoFocus={!isMobileDevice()}
                ></CustomInput>
                <CustomInput
                  id="pincode"
                  placeholder="Current pincode"
                  value={pincode}
                  onChange={(event) => setPincode(event.target.value)}
                ></CustomInput>
              </>
            )}
            <div style={{ margin: "24px 0" }}>
              <ContainerText>
                How far you can travel to learn from your current location?
              </ContainerText>
              <FlexWrapper $alignItems="center" $gap="24px">
                <CustomSlider
                  min={1}
                  max={40}
                  value={distance}
                  setValue={setDistance}
                />
                <FlexWrapper $alignItems="center" $gap="12px">
                  <CustomInput
                    $width="fit-content"
                    id="distance"
                    type="number"
                    min={1}
                    max={40}
                    value={distance}
                    onChange={(event) => setDistance(event.target.value)}
                  />
                  <ContainerText>kms</ContainerText>
                </FlexWrapper>
              </FlexWrapper>
            </div>
            <ContainerText>
              Currently the classes are in person. In future, would you prefer
              to learn online?
            </ContainerText>
            <CustomToggleButton
              selected={prefersOnline}
              setSelected={setPrefersOnline}
            />
          </>
        );
      case 2:
        return <>Yet to come</>;
    }
  }, [currentStep, distance, location, pincode, prefersOnline]);

  const handleContinue = (count) => {
    setCurrentStep((current) => {
      const newStep = current + count;
      if (newStep > 0 && newStep <= steps) {
        return newStep;
      }
      return current;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isPreferencesOpen) return null;
  return (
    <ModalOverlay>
      <DialogContainer $direction="column" $isVisible={isPreferencesOpen}>
        <DialogHeader>
          <FlexWrapper $justifyContent="space-between">
            <ContainerHeaderText $colored>Basic Details</ContainerHeaderText>
            <ContainerText $colored>
              Page {currentStep} of {steps}
            </ContainerText>
          </FlexWrapper>
        </DialogHeader>
        <Separator $width={(100 / steps) * currentStep}></Separator>
        <DialogBody>{renderStep()}</DialogBody>
        <Separator></Separator>
        <DialogFooter>
          <FlexWrapper>
            {currentStep !== 1 && (
              <CustomLink onClick={() => handleContinue(-1)}>Back</CustomLink>
            )}
            <CustomBtn onClick={() => handleContinue(1)}>Next</CustomBtn>
          </FlexWrapper>
        </DialogFooter>
      </DialogContainer>
    </ModalOverlay>
  );
};

export default PreferencesDialog;
