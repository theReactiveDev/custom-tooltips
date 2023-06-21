import { FC } from "react";

import s from "./tooltipContent.module.scss";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { Tooltip } from "../../shared/types/tooltip";

interface TooltipContentProps {
  content: Tooltip;
}

const TooltipContent: FC<TooltipContentProps> = ({ content }) => {
  return (
    <div className={s.container}>
      <CloseIcon className={s.cross} />
      <div className={s.content}>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </div>

      <div className={s.step}>
        <a
          onClick={() => {
            console.log("Что то делаю");
          }}
        >
          {content.button}
        </a>
        <span>{content.id} / 4</span>
      </div>
    </div>
  );
};

export default TooltipContent;
