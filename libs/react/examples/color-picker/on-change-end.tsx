import { ColorPicker, parseColor } from "@ark-ui/react/color-picker";
import { colorPickerStyledSlots as minimal } from "@spark-css/theme-minimal";
import { colorPickerStyledSlots as park } from "@spark-css/theme-park";
import { colorPickerStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";
import { ColorPickerContent } from "./_template";

export const OnChangeEnd = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const [color, setColor] = useState(parseColor("rgba(186, 43, 186, 1)"));

  return (
    <ColorPicker.Root value={color} onValueChangeEnd={(details) => setColor(details.value)}>
      <ColorPicker.Control>
        <p>Current color value: {color.toString("rgba")}</p>

        <ColorPicker.Trigger>
          <ColorPicker.TransparencyGrid />
          <ColorPicker.Context>{(colorPicker) => <ColorPicker.Swatch value={colorPicker.value} />}</ColorPicker.Context>
        </ColorPicker.Trigger>
      </ColorPicker.Control>

      <ColorPicker.Positioner>
        <ColorPickerContent theme={theme} />
      </ColorPicker.Positioner>

      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
  );
};
