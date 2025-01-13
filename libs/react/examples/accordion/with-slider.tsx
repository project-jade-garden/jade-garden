import { Accordion } from "@ark-ui/react/accordion";
import { Slider } from "@ark-ui/react/slider";
import { accordionStyledSlots as accordionMinimal, sliderStyledSlots as sliderMinimal } from "@spark-css/theme-minimal";
import { accordionStyledSlots as accordionPark, sliderStyledSlots as sliderPark } from "@spark-css/theme-park";
import { accordionStyledSlots as accordionShadcn, sliderStyledSlots as sliderShadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithSlider = ({ theme }: { theme: Theme }) => {
  const accordionStyledSlots = getTheme(
    { minimal: accordionMinimal, park: accordionPark, shadcn: accordionShadcn },
    theme
  );
  const sliderStyledSlots = getTheme({ minimal: sliderMinimal, park: sliderPark, shadcn: sliderShadcn }, theme);

  return (
    <Accordion.Root defaultValue={["React"]} className={clsx(accordionStyledSlots.root)}>
      {["React", "Solid", "Vue"].map((item) => (
        <Accordion.Item key={item} value={item} className={clsx(accordionStyledSlots.item)}>
          <Accordion.ItemTrigger className={clsx(accordionStyledSlots.itemTrigger)}>
            What is {item}?
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className={clsx(accordionStyledSlots.itemContent)}>
            {item} is a JavaScript library for building user interfaces.
            <Slider.Root style={{ marginBlock: "20px" }} className={clsx(sliderStyledSlots.root)}>
              <Slider.Control className={clsx(sliderStyledSlots.control)}>
                <Slider.Track className={clsx(sliderStyledSlots.track)}>
                  <Slider.Range className={clsx(sliderStyledSlots.range)} />
                </Slider.Track>
                <Slider.Thumb index={0} className={clsx(sliderStyledSlots.thumb)} />
              </Slider.Control>
            </Slider.Root>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
