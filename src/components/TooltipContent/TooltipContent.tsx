import { FC } from "react";

import { Tooltip } from "../../shared/types";

import { CloseIcon } from "../../assets/icons/CloseIcon";

import s from "./tooltipContent.module.scss";

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
