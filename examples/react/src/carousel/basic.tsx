import { Carousel } from "@ark-ui/react/carousel";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.carouselStyles, park: park.carouselStyles, shadcn: shadcn.carouselStyles },
    theme
  );
  const images = ["https://tinyurl.com/5b6ka8jd", "https://tinyurl.com/7rmccdn5", "https://tinyurl.com/59jxz9uu"];

  return (
    <Carousel.Root defaultPage={0} slideCount={images.length} className={clsx(styledSlots.root)}>
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
