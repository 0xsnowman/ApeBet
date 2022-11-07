import React from "react";

interface IImageProps {
  image: string;
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: "none" | "radius";
  objectFit?: "contain" | "cover" | "fill" | "revert" | "scaleDown";
}

const Image: React.FC<IImageProps> = ({
  image,
  className,
  width = "auto",
  height = "auto  ",
  borderRadius = "none",
  objectFit = "contain",
}) => {
  const objectFitClassNames = {
    contain: "atom-image-contain",
    cover: "atom-image-cover",
    fill: "atom-image-fill",
    revert: "atom-image-revert",
    scaleDown: "atom-image-scaleDown",
  };
  const borderRadiusClassNames = {
    none: "atom-image-radius-none",
    radius: "atom-image-radius-radius",
  };

  return (
    <img
      className={[
        "atom-image",
        className,
        objectFitClassNames[objectFit],
        borderRadiusClassNames[borderRadius],
      ].join(" ")}
      src={image}
      alt="atom-img"
      width={width}
      height={height}
    />
  );
};

export default Image;
