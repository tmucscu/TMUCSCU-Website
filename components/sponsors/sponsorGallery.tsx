import React from "react";

const SponsorGallery = ({
  images,
  height = 100,
}: {
  images: { [key: string]: string };
  height?: number;
}) => {
  return (
    <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
      {Object.keys(images).map((src, index) => (
        <img
          key={index}
          src={images[src]}
          alt={src}
          title={src}
          style={{
            height: `${height}px`,
            width: "auto",
          }}
        />
      ))}
    </div>
  );
};

export default SponsorGallery;
