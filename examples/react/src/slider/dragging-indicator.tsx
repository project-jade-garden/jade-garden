import { Slider } from "@ark-ui/react/slider";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const DraggingIndicator = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.sliderStyles, park: park.sliderStyles, shadcn: shadcn.sliderStyles },
    theme
  );

  return (
    <Slider.Root>
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.DraggingIndicator />
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};
