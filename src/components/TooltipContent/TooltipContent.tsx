import { FC } from "react";

import s from "./tooltipContent.module.scss";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { Tooltip } from "../../shared/types/tooltip";

interface TooltipContentProps {
  content: Tooltip;
  totalSteps: number;
  onNextStep: () => void;
  onClose: () => void;
}

export const TooltipContent: FC<TooltipContentProps> = ({
  content,
  totalSteps,
  onNextStep,
  onClose,
}) => {
  return (
    <div className={s.container}>
      <CloseIcon className={s.cross} onClick={onClose} />
      <div className={s.content}>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </div>

      <div className={s.step}>
        <a onClick={onNextStep}>{content.button}</a>
        <span>
          {content.id} / {totalSteps}
        </span>
      </div>
    </div>
  );
};
