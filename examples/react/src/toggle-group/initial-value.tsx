import { ToggleGroup } from "@ark-ui/react/toggle-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const InitialValue = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.toggleGroupStyles,
      park: park.toggleGroupStyles,
      shadcn: shadcn.toggleGroupStyles
    },
    theme
  );

  return (
    <ToggleGroup.Root defaultValue={["b"]}>
      <ToggleGroup.Item value="a">A</ToggleGroup.Item>
      <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      <ToggleGroup.Item value="c">C</ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
