import React from "react";

const RightChevIcon = ({
  w = 14,
  h = 24,
  color = "#D70D01",
  className = "",
  strokeWidth = 4,
}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 22L12 12L2 2"
        stroke={color}
        // stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RightChevIcon;
