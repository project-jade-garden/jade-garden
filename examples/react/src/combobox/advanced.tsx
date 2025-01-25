import { Combobox, createListCollection } from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Advanced = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.combobox, park: park.combobox, shadcn: shadcn.combobox },
    theme
  );
  const collection = createListCollection({
    items: [
      { label: "React", value: "react" },
      { label: "Solid", value: "solid" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte", disabled: true }
    ]
  });

  return (
    <Combobox.Root className={clsx(styledSlots.root)} collection={collection} multiple>
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
              <Combobox.ItemGroupLabel className={clsx(styledSlots.itemGroupLabel)}>Frameworks</Combobox.ItemGroupLabel>
              {collection.items.map((item) => (
                <Combobox.Item className={clsx(styledSlots.item)} key={item.value} item={item}>
                  <Combobox.ItemText className={clsx(styledSlots.itemText)}>{item.label}</Combobox.ItemText>
                  <Combobox.ItemIndicator className={clsx(styledSlots.itemIndicator)}>✓</Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};
