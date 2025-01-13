import { Slider } from "@ark-ui/react/slider";
import { sliderStyledSlots as minimal } from "@spark-css/theme-minimal";
import { sliderStyledSlots as park } from "@spark-css/theme-park";
import { sliderStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const InitialValue = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Slider.Root defaultValue={[42]}>
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
      <Slider.MarkerGroup>
        <Slider.Marker value={0}>*</Slider.Marker>
        <Slider.Marker value={30}>*</Slider.Marker>
        <Slider.Marker value={60}>*</Slider.Marker>
      </Slider.MarkerGroup>
    </Slider.Root>
  );
};
