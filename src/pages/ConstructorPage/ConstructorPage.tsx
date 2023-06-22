import { useContext, useState } from "react";

import Button from "../../components/Button/Button";
import Tooltip from "../../components/Tooltip/Tooltip";

import { TooltipsMock } from "../../shared/mocks/tooltipsMock";

import s from "./constructorPage.module.scss";
import { TooltipContext } from "../../context/tooltip-context";
// import ConstructorImage from "/constructorImage.png";
const ConstructorPage = () => {
  //   const [currentStep, setCurrentStep] = useState(1);
  //   const [showTooltips, setShowTooltips] = useState(
  //     !localStorage.getItem("onboard")
  //   );
  //   console.log(localStorage.removeItem("onboard"));

  const { currentStep, setCurrentStep, showTooltips, setShowTooltips } =
    useContext(TooltipContext);

  const onOnboardComplete = () => {
    localStorage.setItem("onboard", "complete");
  };

  const handleNextStep = () => {
    if (currentStep === TooltipsMock.length) {
      setShowTooltips(false);
      onOnboardComplete();
    } else {
      //   setCurrentStep((prev) => prev + 1);
      setCurrentStep(currentStep + 1);
    }
  };
  const handleClose = () => {
    setShowTooltips(false);
    onOnboardComplete();
  };

  return (
    <div className={s.pageWrapper}>
      <div className={s.pageImage}>
        <img src="/constructorImage.png" alt="Constructor Image" />
      </div>
      <div className={s.pageInfo}>
        <h1>Добро пожаловать в конструктор!</h1>
        <p>Выберите действие для продолжения</p>
      </div>
      <div className={s.buttonContainer}>
        <Tooltip
          position="top"
          content={TooltipsMock[0]}
          currentStep={currentStep}
          show={showTooltips}
          onNextStep={handleNextStep}
          onClose={handleClose}
        >
          <Button title="Изменить конфигурацию" />
        </Tooltip>
        <Tooltip
          position="right"
          content={TooltipsMock[1]}
          currentStep={currentStep}
          show={showTooltips}
          onNextStep={handleNextStep}
          onClose={handleClose}
        >
          <Button title="Изменить конфигурацию" variant="dark" />
        </Tooltip>
      </div>
    </div>
  );
};

export default ConstructorPage;
