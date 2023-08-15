import React from "react";

const XIcon = ({
  size = 18, // or any default size of your choice
  color = "black",
  stroke = "black", // or any color of your choice
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L1 11M1 1L11 11"
        stroke={color}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default XIcon;
