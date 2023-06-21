import { FC, ReactNode, useEffect, useRef, useState } from "react";
import cn from "classnames";

import s from "./tooltip.module.scss";
import { Tooltip as TooltipType } from "../../shared/types/tooltip";
import TooltipContent from "../TooltipContent/TooltipContent";

interface TooltipProps {
  position: "right" | "top" | "left" | "bottom";
  content: TooltipType;
  children: ReactNode;
  className?: string;
}

const Tooltip: FC<TooltipProps> = ({
  position,
  content,
  children,
  className,
}) => {
  const [isActive, setIsActive] = useState<Boolean>(true);
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
      //   console.log(height, "height");
    }
  }, [TooltipRef]);

  return (
    <div className={s.tooltipWrapper}>
      {children}
      {isActive && (
        <div>
          <div
            className={cn(s.tooltip, s[position], className)}
            ref={TooltipRef}
          >
            <TooltipContent content={content} />
          </div>
          <div className={s.tooltipOverlay}></div>
        </div>
      )}
    </div>
    //
    // </div>
  );
};

export default Tooltip;
