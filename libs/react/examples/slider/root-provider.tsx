import { Slider, useSlider } from "@ark-ui/react/slider";
import { sliderStyledSlots as minimal } from "@spark-css/theme-minimal";
import { sliderStyledSlots as park } from "@spark-css/theme-park";
import { sliderStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const slider = useSlider();

  return (
    <>
      <button type="button" onClick={() => slider.focus()}>
        Focus
      </button>

      <Slider.RootProvider value={slider}>
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
      </Slider.RootProvider>
    </>
  );
};
