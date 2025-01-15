import { Carousel } from "@ark-ui/react/carousel";
import { carouselStyledSlots as minimal } from "@spark-css/theme-minimal";
import { carouselStyledSlots as park } from "@spark-css/theme-park";
import { carouselStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

const images = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`);

export const Autoplay = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Carousel.Root autoplay loop className={clsx(styledSlots.root)}>
      <Carousel.Control className={clsx(styledSlots.control)}>
        <Carousel.AutoplayTrigger className={clsx(styledSlots.autoplayTrigger)}>
          <Carousel.Context>{({ isPlaying }) => (isPlaying ? "Pause" : "Play")}</Carousel.Context>
        </Carousel.AutoplayTrigger>
      </Carousel.Control>
      <Carousel.IndicatorGroup className={clsx(styledSlots.indicatorGroup)}>
        {images.map((_, index) => (
          <Carousel.Indicator key={index} index={index} className={clsx(styledSlots.indicator)} />
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
