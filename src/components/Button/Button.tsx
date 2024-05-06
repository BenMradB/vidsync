import React from "react";

import { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

export type ButtonProps = {
  className?: string;
  primaryColor: string;
  onClick: () => void;
  tooltipId?: string;
  tooltipContent?: string;
  otherStyles?: React.CSSProperties;
  children: React.ReactNode;
};

const Button = ({
  className = "",
  primaryColor,
  onClick,
  tooltipId,
  tooltipContent,
  otherStyles,
  children,
}: ButtonProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <>
      <button
        data-tooltip-id={tooltipId}
        className={`btn ${className} `}
        onClick={onClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          backgroundColor: isHovering ? primaryColor : undefined,
          ...otherStyles,
        }}
      >
        {children}
      </button>
      <ReactTooltip
        id={tooltipId!}
        place="top-end"
        variant="dark"
        content={tooltipContent}
      />
    </>
  );
};

export default Button;
