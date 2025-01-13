import { ToggleGroup, useToggleGroup } from "@ark-ui/react/toggle-group";
import { toggleGroupStyledSlots as minimal } from "@spark-css/theme-minimal";
import { toggleGroupStyledSlots as park } from "@spark-css/theme-park";
import { toggleGroupStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
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
