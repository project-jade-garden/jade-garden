import { ToggleGroup, useToggleGroup } from "@ark-ui/react/toggle-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.toggleGroupStyledSlots,
      park: park.toggleGroupStyledSlots,
      shadcn: shadcn.toggleGroupStyledSlots
    },
    theme
  );
  const toggleGroup = useToggleGroup();

  return (
    <>
      <button type="button" onClick={() => toggleGroup.setValue(["b"])}>
        Set to B
      </button>

      <ToggleGroup.RootProvider value={toggleGroup}>
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
        <ToggleGroup.Item value="c">C</ToggleGroup.Item>
      </ToggleGroup.RootProvider>
    </>
  );
};
