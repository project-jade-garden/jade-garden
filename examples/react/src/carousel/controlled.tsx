import { Carousel } from "@ark-ui/react/carousel";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

const images = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`);

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.carouselStyles, park: park.carouselStyles, shadcn: shadcn.carouselStyles },
    theme
  );
  const [page, setPage] = useState(0);

  return (
    <Carousel.Root
      slideCount={images.length}
      page={page}
      onPageChange={(e) => setPage(e.page)}
      className={clsx(styledSlots.root)}
    >
      <Carousel.Control className={clsx(styledSlots.control)}>
        <Carousel.PrevTrigger className={clsx(styledSlots.prevTrigger)}>Previous</Carousel.PrevTrigger>
        <Carousel.NextTrigger className={clsx(styledSlots.nextTrigger)}>Next</Carousel.NextTrigger>
      </Carousel.Control>
      <Carousel.IndicatorGroup className={clsx(styledSlots.indicatorGroup)}>
        {images.map((_, index) => (
          <Carousel.Indicator key={index} index={index} className={clsx(styledSlots.indicator)}>
            {index + 1}
          </Carousel.Indicator>
        ))}
      </Carousel.IndicatorGroup>
      <Carousel.ItemGroup className={clsx(styledSlots.itemGroup)}>
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index} className={clsx(styledSlots.item)}>
            <img src={image} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  );
};
