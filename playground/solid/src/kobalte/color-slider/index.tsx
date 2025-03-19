import { ColorSlider } from "@kobalte/core/color-slider";

export const Basic = () => {
  return (
    <ColorSlider class="ColorSliderRoot" channel="blue">
      <div class="ColorSliderLabel">
        <ColorSlider.Label>Blue</ColorSlider.Label>
        <ColorSlider.ValueLabel />
      </div>
      <ColorSlider.Track class="ColorSliderTrack">
        <ColorSlider.Thumb class="ColorSliderThumb">
          <ColorSlider.Input />
        </ColorSlider.Thumb>
      </ColorSlider.Track>
    </ColorSlider>
  );
};
