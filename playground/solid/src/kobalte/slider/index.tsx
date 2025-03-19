import { Slider } from "@kobalte/core/slider";

export const Basic = () => {
  return (
    <Slider class="SliderRoot">
      <div class="SliderLabel">
        <Slider.Label>Label</Slider.Label>
        <Slider.ValueLabel />
      </div>
      <Slider.Track class="SliderTrack">
        <Slider.Fill class="SliderRange" />
        <Slider.Thumb class="SliderThumb">
          <Slider.Input />
        </Slider.Thumb>
      </Slider.Track>
    </Slider>
  );
};
