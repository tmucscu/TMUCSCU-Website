import {Carousel} from "./imageCarousel"

export const shuffleImages = (imageIds: string[]) => {
    return imageIds.sort(() => Math.random() - 0.5);
};


const TWELVE_HOURS_IN_MS = 12 * 60 * 60 * 1000;


export const getImageIdsForCarousel = async () => {
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
        return shuffleImages(imageIds);
    } else if (carousel) {
        return shuffleImages(carousel.images);
    }
    
    return []
};