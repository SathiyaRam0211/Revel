import { useState } from "react";
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
} from "../../utils/util-styled-components";
import { useAuthentication } from "../../contexts/AuthenticationContext";

const PreferencesDialog = () => {
  const { isPreferencesOpen, closePreferences } = useAuthentication();
  const steps = 4;
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = (count) => {
    setCurrentStep((current) => {
      const newStep = current + count;
      if (newStep > 0 && newStep <= steps) {
        return newStep;
      }
      return current;
    });
  };

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
        <DialogBody></DialogBody>
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
