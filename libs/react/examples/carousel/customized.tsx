import { Carousel } from "@ark-ui/react/carousel";
import { carouselStyledSlots as minimal } from "@spark-css/theme-minimal";
import { carouselStyledSlots as park } from "@spark-css/theme-park";
import { carouselStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Customized = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const images = ["https://tinyurl.com/5b6ka8jd", "https://tinyurl.com/7rmccdn5", "https://tinyurl.com/59jxz9uu"];

  return (
    <Carousel.Root
      align="center"
      loop={true}
      slidesPerView={2}
      spacing="16px"
      orientation="horizontal"
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
