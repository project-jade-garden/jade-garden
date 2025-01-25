import { Accordion } from "@ark-ui/react/accordion";
import { Slider } from "@ark-ui/react/slider";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithSlider = ({ theme }: { theme: Theme }) => {
  const accordion = getTheme({ minimal: minimal.accordion, park: park.accordion, shadcn: shadcn.accordion }, theme);
  const slider = getTheme({ minimal: minimal.slider, park: park.slider, shadcn: shadcn.slider }, theme);

  return (
    <Accordion.Root defaultValue={["React"]} className={clsx(accordion.root)}>
      {["React", "Solid", "Vue"].map((item) => (
        <Accordion.Item key={item} value={item} className={clsx(accordion.item)}>
          <Accordion.ItemTrigger className={clsx(accordion.itemTrigger)}>What is {item}?</Accordion.ItemTrigger>
          <Accordion.ItemContent className={clsx(accordion.itemContent)}>
            {item} is a JavaScript library for building user interfaces.
            <Slider.Root style={{ marginBlock: "20px" }} className={clsx(slider.root)}>
              <Slider.Control className={clsx(slider.control)}>
                <Slider.Track className={clsx(slider.track)}>
                  <Slider.Range className={clsx(slider.range)} />
                </Slider.Track>
                <Slider.Thumb index={0} className={clsx(slider.thumb)} />
              </Slider.Control>
            </Slider.Root>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
