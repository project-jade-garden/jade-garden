import { ColorSwatch } from "@kobalte/core/color-swatch";
import { parseColor } from "@kobalte/core/colors";

export const Basic = () => {
  return <ColorSwatch class="ColorSwatchRoot" value={parseColor("hsl(200, 98%, 39%)")} />;
};
