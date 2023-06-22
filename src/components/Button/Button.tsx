import { FC } from "react";
import cn from "classnames";

import s from "./button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  title: string;
  className?: string;
  type?: "submit" | "reset" | "button";
  variant?: "light" | "dark";
}

export const Button: FC<ButtonProps> = ({
  title,
  className,
  onClick,
  type = "button",
  variant = "light",
}) => {
  return (
    <button
      className={cn(s.btn, s[variant], className)}
      onClick={() => onClick?.()}
      type={type}
    >
      {title}
    </button>
  );
};
