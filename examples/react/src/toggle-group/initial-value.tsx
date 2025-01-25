import { ToggleGroup } from "@ark-ui/react/toggle-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const InitialValue = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.toggleGroup,
      park: park.toggleGroup,
      shadcn: shadcn.toggleGroup
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
