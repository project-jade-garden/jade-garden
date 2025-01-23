import { Accordion } from "@ark-ui/react/accordion";
import { Slider } from "@ark-ui/react/slider";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithSlider = ({ theme }: { theme: Theme }) => {
  const accordionStyledSlots = getTheme(
    { minimal: minimal.accordionStyledSlots, park: park.accordionStyledSlots, shadcn: shadcn.accordionStyledSlots },
    theme
  );
  const sliderStyledSlots = getTheme(
    { minimal: minimal.sliderStyledSlots, park: park.sliderStyledSlots, shadcn: shadcn.sliderStyledSlots },
    theme
  );

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
