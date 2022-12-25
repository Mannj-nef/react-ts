import React, { ReactNode } from "react";

interface Button {
  type?: "button" | "submit";
  children?: string;
  className?: string;
  handleClick?: () => void;
}

const Button = (props: Button) => {
  const { children, className, handleClick, type = "button" } = props;

  return (
    <button type={type}>
      <span
        className={`p-5 rounded-lg text-white bg-blue-500 ${className}`}
        onClick={handleClick}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
