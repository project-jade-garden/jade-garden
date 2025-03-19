import { ColorArea } from "@kobalte/core/color-area";

export const Basic = () => {
  return (
    <ColorArea class="ColorAreaRoot">
      <ColorArea.Label class="ColorAreaLabel">Label</ColorArea.Label>
      <ColorArea.Background class="ColorAreaBackground">
        <ColorArea.Thumb class="ColorAreaThumb">
          <ColorArea.HiddenInputX />
          <ColorArea.HiddenInputY />
        </ColorArea.Thumb>
      </ColorArea.Background>
    </ColorArea>
  );
};
