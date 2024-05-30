"use client";

import { useEffect, useState } from "react";

import Slider from "react-slick";
import clsx from "clsx";
import { getImageIdsForCarousel } from "./utils";

export type Carousel = {
  images: string[];
  ttl: string;
};
const ImageCarousel = ({ slidesToShow }: { slidesToShow: number }) => {
  const [carouselImages, setCarouselImages] = useState<string[]>([]);

  useEffect(() => {
    getImageIdsForCarousel().then((imageIds) => {
      setCarouselImages(imageIds);
    });
  }, []);

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

  return (
    <Slider className="overflow-hidden w-[600px]" {...settings}>
      {carouselImages.map((imageId, index) => {
        return (
          <div key={imageId} className="flex justify-end align-center">
            <img
              className={clsx(
                "w-[500px] rounded-3xl m-4",
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
