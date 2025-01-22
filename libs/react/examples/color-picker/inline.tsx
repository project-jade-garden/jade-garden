import { ColorPicker, parseColor } from "@ark-ui/react/color-picker";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";
import { ColorPickerContent } from "./_template";

export const Inline = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.colorPickerStyledSlots,
      park: park.colorPickerStyledSlots,
      shadcn: shadcn.colorPickerStyledSlots
    },
    theme
  );

  return (
    <ColorPicker.Root className={clsx(styledSlots.root)} open defaultValue={parseColor("#eb5e41")}>
      <ColorPickerContent theme={theme} />
    </ColorPicker.Root>
  );
};
