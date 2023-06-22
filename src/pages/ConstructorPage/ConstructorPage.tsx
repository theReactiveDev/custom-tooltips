import { useContext } from "react";

import Button from "../../components/Button/Button";
import Tooltip from "../../components/Tooltip/Tooltip";

import { TooltipContext } from "../../context/tooltip-context";

import ConstructorImage from "../../assets/images/constructorImage.png";

import s from "./constructorPage.module.scss";

const ConstructorPage = () => {
  console.log(localStorage.removeItem("onboard"));

  const {
    currentStep,
    setCurrentStep,
    showTooltips,
    setShowTooltips,
    tooltipData,
  } = useContext(TooltipContext);
  console.log(useContext(TooltipContext));

  const onOnboardComplete = () => {
    localStorage.setItem("onboard", "complete");
  };

  const handleNextStep = () => {
    if (currentStep === tooltipData.length) {
      setShowTooltips(false);
      onOnboardComplete();
    } else {
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
        <img
          src={ConstructorImage}
          alt="Constructor Image"
          height={275}
          width={876}
        />
      </div>
      <div className={s.pageInfo}>
        <h1>Добро пожаловать в конструктор!</h1>
        <p>Выберите действие для продолжения</p>
      </div>
      <div className={s.buttonContainer}>
        <Tooltip
          position="top"
          content={tooltipData[0]}
          currentStep={currentStep}
          show={showTooltips}
          onNextStep={handleNextStep}
          onClose={handleClose}
          targetSelector=".configBtn"
        >
          <Button title="Изменить конфигурацию" className="configBtn" />
        </Tooltip>
        <Tooltip
          position="right"
          content={tooltipData[1]}
          currentStep={currentStep}
          show={showTooltips}
          onNextStep={handleNextStep}
          onClose={handleClose}
          targetSelector=".buyBtn"
        >
          <Button
            title="Купить любой диван"
            variant="dark"
            className="buyBtn"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default ConstructorPage;
