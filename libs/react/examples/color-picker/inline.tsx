import { ColorPicker, parseColor } from "@ark-ui/react/color-picker";
import { colorPickerStyledSlots as minimal } from "@spark-css/theme-minimal";
import { colorPickerStyledSlots as park } from "@spark-css/theme-park";
import { colorPickerStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";
import { ColorPickerContent } from "./_template";

export const Inline = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <ColorPicker.Root open defaultValue={parseColor("#eb5e41")}>
      <ColorPickerContent theme={theme} />
    </ColorPicker.Root>
  );
};
