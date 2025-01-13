import { Carousel } from "@ark-ui/react/carousel";
import { carouselStyledSlots as minimal } from "@spark-css/theme-minimal";
import { carouselStyledSlots as park } from "@spark-css/theme-park";
import { carouselStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["https://tinyurl.com/5b6ka8jd", "https://tinyurl.com/7rmccdn5", "https://tinyurl.com/59jxz9uu"];

  return (
    <Carousel.Root
      index={currentIndex}
      onIndexChange={(details) => setCurrentIndex(details.index)}
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
      <Carousel.Viewport className={clsx(styledSlots.viewport)}>
        <Carousel.ItemGroup className={clsx(styledSlots.itemGroup)}>
          {images.map((image, index) => (
            <Carousel.Item key={index} index={index} className={clsx(styledSlots.item)}>
              <img src={image} alt={`Slide ${index}`} />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
      </Carousel.Viewport>
    </Carousel.Root>
  );
};
