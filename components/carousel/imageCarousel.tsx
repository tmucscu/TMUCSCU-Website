"use client";

import { useEffect, useState } from "react";

import Slider from "react-slick";
import clsx from "clsx";

// TODO: useContext so state is maintained across pages (carousel shouldn't reset)
const ImageCarousel = () => {
  type Carousel = {
    images: string[];
    ttl: string;
  };

  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  useEffect(() => {
    const TWELVE_HOURS_IN_MS = 12 * 60 * 60 * 1000;

    const getImageIdsForCarousel = async () => {
      const carouselCache = localStorage.getItem("carousel");

      const carousel: Carousel | null = carouselCache
        ? JSON.parse(carouselCache)
        : null;

      const now = new Date().getTime();

      // fetch images if no carousel in local storage or images are empty or ttl expired
      const shouldFetchImages =
        !carousel ||
        (carousel &&
          (carousel.images.length === 0 ||
            now - Number(carousel?.ttl) >= TWELVE_HOURS_IN_MS));

      if (shouldFetchImages) {
        const response = await fetch("/api/carousel");
        const { imageIds } = await response.json();
        localStorage.setItem(
          "carousel",
          JSON.stringify({ images: imageIds, ttl: now.toString() })
        );
        setCarouselImages(imageIds);
      } else if (carousel) {
        setCarouselImages(carousel.images);
      }
    };

    getImageIdsForCarousel();
  }, []);

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
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
