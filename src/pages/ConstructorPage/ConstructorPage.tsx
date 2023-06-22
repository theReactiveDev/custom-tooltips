import { Button, Tooltip } from "../../components";

import ConstructorImage from "../../assets/images/constructorImage.png";

import s from "./constructorPage.module.scss";

export const ConstructorPage = () => {
  //   console.log(localStorage.removeItem("onboard"));

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
        <Tooltip position="top" step={0}>
          <Button title="Изменить конфигурацию" />
        </Tooltip>
        <Tooltip position="right" step={1}>
          <Button title="Купить любой диван" variant="dark" />
        </Tooltip>
      </div>
    </div>
  );
};
