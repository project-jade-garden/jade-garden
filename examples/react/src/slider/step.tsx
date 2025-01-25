import { Slider } from "@ark-ui/react/slider";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Step = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.slider, park: park.slider, shadcn: shadcn.slider },
    theme
  );

  return (
    <Slider.Root step={0.01} min={5} max={10}>
      <Slider.Label>Label</Slider.Label>
      <Slider.ValueText />
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};
