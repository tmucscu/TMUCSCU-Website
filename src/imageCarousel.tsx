import { useEffect, useState } from "react";

import Slider from "react-slick";
import axios from "axios";
import clsx from "clsx";

// TODO: Clean up this mess
// TODO: useContext so state is maintained across pages (carousel shouldn't reset)
const ImageCarousel = () => {
  // type Carousel = {
  //   images: string[];
  //   ttl: string;
  // };

  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  // const FOLDER_ID = "";

  // const getImageIdsFromGFolder = (folderId: string) => {
  //   const apiKey = "";
  //   const url = "https://www.googleapis.com/drive/v3/files";
  //   const params = {
  //     q: `'${folderId}' in parents and trashed=false`,
  //     key: apiKey,
  //     fields: "files(id)",
  //     supportsAllDrives: true,
  //     includeItemsFromAllDrives: true,
  //   };
  //   return axios
  //     .get(url, { params })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         const files = response.data.files;
  //         const imageIds: string[] = [];
  //         files.forEach((file: { id: string }) => {
  //           imageIds.push(file.id);
  //         });

  //         return imageIds;
  //       } else {
  //         console.error(
  //           `Error: ${response.status} - ${response.data.error.message}`
  //         );
  //         return [];
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(`Error: ${error.message}`);
  //       return [];
  //     });
  // };

  useEffect(() => {
    setCarouselImages([
      "1tcBmYpIY71vW_PfWm8KcQGXttftmFu_b",
      "1crQUvj8OmRm6lXappwgAy1_-r5YrXq11",
      "1YUj0tQqlUVq6RS7AAukRznnhl3IRLxNe",
      "1GJp4NERydWUr4nwAim4c-F7bO9ipi_VE",
      "1PBq-SrB1BH_OEHQVEfoJFPqLPv4W0RnK",
      "1pj__8TI1dyNjU5OMBpjZsqSxZNObnM4P",
      "1owBzu8644F6XhQfeE8cYWURZ0hS6YLXa",
      "1tmNHD-EnD3Y22KLku7GDln3FgknbhjZq",
      "1nlhZ1H7UHcQu38ZK2s1njXZs7v1twp6O",
      "1ZZ8eIaJUoOdN_yKxK6P4CyjWQEMck1nh",
    ]);
    // const TWELVE_HOURS_IN_MS = 12 * 60 * 60 * 1000;

    // const carouselCache = localStorage.getItem("carousel");
    // const carousel: Carousel | null = carouselCache
    //   ? JSON.parse(carouselCache)
    //   : null;
    // const now = new Date().getTime();

    // const shouldGetImages =
    //   !carousel ||
    //   (carousel &&
    //     (carousel.images.length === 0 ||
    //       now - Number(carousel?.ttl) >= TWELVE_HOURS_IN_MS));

    // if (shouldGetImages) {
    //   getImageIdsFromGFolder(FOLDER_ID).then((fileIds) => {
    //     console.log(fileIds);
    //     localStorage.setItem(
    //       "carousel",
    //       JSON.stringify({ images: fileIds, ttl: now.toString() })
    //     );
    //     setCarouselImages(fileIds);
    //   });
    // } else if (carousel) {
    //   setCarouselImages(carousel.images);
    // }
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
