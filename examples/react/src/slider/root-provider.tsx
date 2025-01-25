import { Slider, useSlider } from "@ark-ui/react/slider";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.slider, park: park.slider, shadcn: shadcn.slider },
    theme
  );
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
