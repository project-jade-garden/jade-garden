import { ColorPicker, parseColor } from "@ark-ui/react/color-picker";
import { colorPickerStyledSlots as minimal } from "@spark-css/theme-minimal";
import { colorPickerStyledSlots as park } from "@spark-css/theme-park";
import { colorPickerStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";
import { ColorPickerSlider } from "./_template";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

export const SliderOnly = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <ColorPicker.Root open defaultValue={parseColor("#7f007f")}>
      <ColorPicker.Content>
        <ColorPicker.ValueText />
        <ColorPicker.View format="rgba" style={style}>
          <ColorPickerSlider channel="red" />
          <ColorPickerSlider channel="green" />
          <ColorPickerSlider channel="blue" />
        </ColorPicker.View>
      </ColorPicker.Content>
    </ColorPicker.Root>
  );
};
