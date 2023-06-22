import { FC, ReactNode, useContext, useEffect, useRef } from "react";
import cn from "classnames";

import { TooltipContent } from "../../components";

import { TooltipContext } from "../../context";

import s from "./tooltip.module.scss";

interface TooltipProps {
  children: ReactNode;
  position: "right" | "top" | "left" | "bottom";
  step: number;
  className?: string;
}

export const Tooltip: FC<TooltipProps> = ({
  position,
  step,
  children,
  className,
}) => {
  const TooltipRef = useRef<HTMLDivElement>(null);
  const ChildrenRef = useRef<HTMLDivElement>(null);

  const {
    currentStep,
    setCurrentStep,
    showTooltips,
    setShowTooltips,
    tooltipData,
  } = useContext(TooltipContext);

  const content = step < tooltipData.length ? tooltipData[step] : null;

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
  }, [showTooltips]);

  useEffect(() => {
    const target = ChildrenRef.current;

    if (isTooltipShow()) {
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
  }, [showTooltips, currentStep]);

  const isTooltipShow = () => {
    return content && currentStep === content.id && showTooltips;
  };

  const onOnboardComplete = () => {
    localStorage.setItem("onboard", "complete");
  };

  const onNextStep = () => {
    if (currentStep === tooltipData.length) {
      setShowTooltips(false);
      onOnboardComplete();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const onClose = () => {
    setShowTooltips(false);
    onOnboardComplete();
  };

  return (
    <div className={s.tooltipWrapper}>
      <div ref={ChildrenRef}>{children}</div>
      {isTooltipShow() && (
        <div>
          <div
            className={cn(s.tooltip, s[position], className)}
            ref={TooltipRef}
          >
            <TooltipContent
              content={content!}
              onNextStep={onNextStep}
              onClose={onClose}
              totalSteps={tooltipData.length}
            />
          </div>
          <div className={s.tooltipOverlay}></div>
        </div>
      )}
    </div>
  );
};
