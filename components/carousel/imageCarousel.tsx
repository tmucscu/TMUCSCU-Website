"use client";

import { useContext, useEffect, useState } from "react";

import Slider from "react-slick";
import { WidthContext } from "../../app/context/WidthContext.tsx";
import clsx from "clsx";
import { getImageIdsForCarousel } from "./utils";

export type Carousel = {
  images: string[];
  ttl: string;
};
const ImageCarousel = ({ numSlides }: { numSlides: number }) => {
  const width = useContext(WidthContext);
  const isLargeScreen = width >= 1280;
  const [carouselImages, setCarouselImages] = useState<string[]>([]);

  useEffect(() => {
    getImageIdsForCarousel().then((imageIds) => {
      setCarouselImages(imageIds);
    });
  }, []);

  const slidesToShow = Math.min(numSlides, carouselImages.length);

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  if (!isLargeScreen) {
    return null;
  }

  return (
    <Slider className="overflow-hidden w-[500px]" {...settings}>
      {carouselImages.map((imageId, index) => {
        return (
          <div key={imageId} className="flex justify-end align-center">
            <img
              className={clsx(
                "w-[350px] rounded-3xl m-4",
                index % 2 !== 0 && "ml-24"
              )}
              src={`https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`}
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default ImageCarousel;
