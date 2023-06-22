import { FC, ReactNode, useEffect, useRef } from "react";
import cn from "classnames";

import { TooltipContent } from "../../components";

import { Tooltip as TooltipType } from "../../shared/types/tooltip";

import s from "./tooltip.module.scss";

interface TooltipProps {
  content: TooltipType;
  children: ReactNode;
  position: "right" | "top" | "left" | "bottom";
  currentStep: number;
  totalSteps: number;
  show: boolean;
  onClose: () => void;
  onNextStep: () => void;
  className?: string;
  targetSelector: string;
}

export const Tooltip: FC<TooltipProps> = ({
  position,
  show,
  content,
  children,
  className,
  currentStep,
  totalSteps,
  onNextStep,
  onClose,
  targetSelector,
}) => {
  const TooltipRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
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
      TooltipRef.current.style.zIndex = "100";
    }
  };
  useEffect(() => {
    let TooltipObserver = new ResizeObserver(handleResize);
    if (TooltipRef.current) {
      TooltipObserver.observe(TooltipRef.current);

      return () => {
        TooltipObserver.disconnect();
      };
    }
  }, [show]);

  useEffect(() => {
    const target = document.querySelector(targetSelector);

    if (show && currentStep === content.id) {
      if (TooltipRef.current) {
        TooltipRef.current.style.zIndex = "100";
      }
      if (target) {
        target.setAttribute("style", " position: relative; z-index: 100");
      }
    } else {
      if (TooltipRef.current) {
        TooltipRef.current.style.zIndex = "unset";
      }
      if (target) {
        target.setAttribute("style", " position: static; z-index: unset");
      }
    }
  }, [show, currentStep]);

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
              totalSteps={totalSteps}
            />
          </div>
          <div className={s.tooltipOverlay}></div>
        </div>
      )}
    </div>
  );
};
