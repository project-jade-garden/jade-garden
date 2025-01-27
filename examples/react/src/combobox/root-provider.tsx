import { Combobox, createListCollection, useCombobox } from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useMemo, useState } from "react";

const initialItems = ["React", "Solid", "Vue"];
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.comboboxStyles, park: park.comboboxStyles, shadcn: shadcn.comboboxStyles },
    theme
  );
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

      <Combobox.RootProvider className={clsx(styledSlots.root)} value={combobox}>
        <Combobox.Label className={clsx(styledSlots.label)}>Framework</Combobox.Label>
        <Combobox.Control className={clsx(styledSlots.control)}>
          <Combobox.Input className={clsx(styledSlots.input)} />
          <Combobox.Trigger className={clsx(styledSlots.trigger)}>Open</Combobox.Trigger>
          <Combobox.ClearTrigger className={clsx(styledSlots.clearTrigger)}>Clear</Combobox.ClearTrigger>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner className={clsx(styledSlots.positioner)}>
            <Combobox.Content className={clsx(styledSlots.content)}>
              <Combobox.ItemGroup className={clsx(styledSlots.itemGroup)}>
                <Combobox.ItemGroupLabel className={clsx(styledSlots.itemGroupLabel)}>
                  Frameworks
                </Combobox.ItemGroupLabel>
                {collection.items.map((item) => (
                  <Combobox.Item className={clsx(styledSlots.item)} key={item} item={item}>
                    <Combobox.ItemText className={clsx(styledSlots.itemText)}>{item}</Combobox.ItemText>
                    <Combobox.ItemIndicator className={clsx(styledSlots.itemIndicator)}>✓</Combobox.ItemIndicator>
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
