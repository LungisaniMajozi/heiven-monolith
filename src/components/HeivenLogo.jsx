import React from "react";

// Logo images from public folder
const LOGO_IMAGES = {
  group: "../group_logo.png",
  telecoms: "/telecoms_logo.png",
  energy: "/enegry_logo.png",
  minerals: "/minerals_logo.png",
  electronics: "/electronics_logo.png",
};

export default function HeivenLogo({
  variant = "group",
  size = "md",
  inverted = false, // PNGs support clean rendering on colored backgrounds
  className = "",
}) {
  const src = LOGO_IMAGES[variant] || LOGO_IMAGES.group;

  const heights = {
    sm: "h-8 sm:h-9",
    md: "h-11 sm:h-12",
    lg: "h-14 sm:h-16",
    xl: "h-20 sm:h-24",
  };
  const hClass = heights[size] || heights.md;

  return (
    <div className={`inline-block overflow-hidden ${className}`}>
      <img
        src={src}
        alt={`Heiven ${variant}`}
        className={`${hClass} w-auto object-contain block`}
      />
    </div>
  );
}
