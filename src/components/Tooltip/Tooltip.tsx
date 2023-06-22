import { FC, ReactNode, useEffect, useRef } from "react";
import cn from "classnames";

import TooltipContent from "../TooltipContent/TooltipContent";

import { Tooltip as TooltipType } from "../../shared/types/tooltip";

import s from "./tooltip.module.scss";

interface TooltipProps {
  content: TooltipType;
  children: ReactNode;
  position: "right" | "top" | "left" | "bottom";
  currentStep: number;
  show: boolean;
  onClose: () => void;
  onNextStep: () => void;
  className?: string;
}

const Tooltip: FC<TooltipProps> = ({
  position,
  show,
  content,
  children,
  className,
  currentStep,
  onNextStep,
  onClose,
}) => {
  const TooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (TooltipRef.current) {
      const RectSize = TooltipRef.current.getBoundingClientRect();
      TooltipRef.current.style.setProperty(
        "--element-height",
        RectSize.height + "px"
      );
      TooltipRef.current.style.setProperty(
        "--element-width",
        RectSize.width + "px"
      );
    }
  }, [TooltipRef]);

  return (
    <div className={s.tooltipWrapper}>
      {children}
      {currentStep === content.id && show && (
        <div>
          <div
            className={cn(s.tooltip, s[position], className)}
            ref={TooltipRef}
          >
            <TooltipContent
              content={content}
              onNextStep={onNextStep}
              onClose={onClose}
            />
          </div>
          <div className={s.tooltipOverlay}></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
