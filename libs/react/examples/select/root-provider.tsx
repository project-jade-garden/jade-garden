import { Portal } from "@ark-ui/react/portal";
import { Select, createListCollection, useSelect } from "@ark-ui/react/select";
import { selectStyledSlots as minimal } from "@spark-css/theme-minimal";
import { selectStyledSlots as park } from "@spark-css/theme-park";
import { selectStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const collection = createListCollection({ items: ["React", "Solid", "Vue"] });

  const select = useSelect({ collection: collection });

  return (
    <>
      <button type="button" onClick={() => select.focus()}>
        Focus
      </button>

      <Select.RootProvider value={select}>
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <ChevronDownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup>
                <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
                {collection.items.map((item) => (
                  <Select.Item key={item} item={item}>
                    <Select.ItemText>{item}</Select.ItemText>
                    <Select.ItemIndicator>✓</Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Portal>
        <Select.HiddenSelect />
      </Select.RootProvider>
    </>
  );
};
