import { ColorWheel } from "@kobalte/core/color-wheel";

export const Basic = () => {
  return (
    <ColorWheel class="ColorWheelRoot" thickness={60}>
      <ColorWheel.Label class="ColorWheelLabel">Label</ColorWheel.Label>
      <ColorWheel.Track class="ColorWheelTrack">
        <ColorWheel.Thumb class="ColorWheelThumb">
          <ColorWheel.Input />
        </ColorWheel.Thumb>
      </ColorWheel.Track>
    </ColorWheel>
  );
};
