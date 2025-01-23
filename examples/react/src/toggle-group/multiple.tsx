import { ToggleGroup } from "@ark-ui/react/toggle-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Multiple = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.toggleGroupStyledSlots,
      park: park.toggleGroupStyledSlots,
      shadcn: shadcn.toggleGroupStyledSlots
    },
    theme
  );

  return (
    <ToggleGroup.Root multiple>
      <ToggleGroup.Item value="a">A</ToggleGroup.Item>
      <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      <ToggleGroup.Item value="c">C</ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
