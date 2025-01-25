import { Carousel, useCarousel } from "@ark-ui/react/carousel";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal: minimal.carousel, park: park.carousel, shadcn: shadcn.carousel }, theme);
  const images = ["https://tinyurl.com/5b6ka8jd", "https://tinyurl.com/7rmccdn5", "https://tinyurl.com/59jxz9uu"];
  const carousel = useCarousel();

  return (
    <>
      <button type="button" onClick={() => carousel.scrollNext()}>
        Next
      </button>

      <Carousel.RootProvider value={carousel} className={clsx(styledSlots.root)}>
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
      </Carousel.RootProvider>
    </>
  );
};
