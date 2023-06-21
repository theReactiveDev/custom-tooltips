import { useState } from "react";

import Button from "../../components/Button/Button";
import Tooltip from "../../components/Tooltip/Tooltip";

import { TooltipsMock } from "../../shared/mocks/tooltipsMock";

import s from "./constructorPage.module.scss";
// import ConstructorImage from "/constructorImage.png";
const ConstructorPage = () => {
  const [currentTooltip, setCurrentTooltip] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);
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
        <Tooltip position="top" content={TooltipsMock[0]}>
          <Button title="Изменить конфигурацию" />
        </Tooltip>
        <Tooltip position="right" content={TooltipsMock[1]}>
          <Button title="Изменить конфигурацию" variant="dark" />
        </Tooltip>
      </div>
    </div>
  );
};

export default ConstructorPage;
