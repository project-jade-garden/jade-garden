import { Combobox, createListCollection, useCombobox } from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { comboboxStyledSlots as minimal } from "@spark-css/theme-minimal";
import { comboboxStyledSlots as park } from "@spark-css/theme-park";
import { comboboxStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useMemo, useState } from "react";

const initialItems = ["React", "Solid", "Vue"];
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const [items, setItems] = useState(initialItems);

  const collection = useMemo(() => createListCollection({ items }), [items]);

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    setItems(initialItems.filter((item) => item.toLowerCase().includes(details.inputValue.toLowerCase())));
  };

  const combobox = useCombobox({ collection: collection, onInputValueChange: handleInputChange });

  return (
    <>
      <button type="button" onClick={() => combobox.focus()}>
        Focus
      </button>

      <Combobox.RootProvider value={combobox}>
        <Combobox.Label>Framework</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input />
          <Combobox.Trigger>Open</Combobox.Trigger>
          <Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.ItemGroup>
                <Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
                {collection.items.map((item) => (
                  <Combobox.Item key={item} item={item}>
                    <Combobox.ItemText>{item}</Combobox.ItemText>
                    <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
                  </Combobox.Item>
                ))}
              </Combobox.ItemGroup>
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.RootProvider>
    </>
  );
};
