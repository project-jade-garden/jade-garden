import * as Slider from "@radix-ui/react-slider";

export const Basic = () => (
  <Slider.Root>
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb />
  </Slider.Root>
);
