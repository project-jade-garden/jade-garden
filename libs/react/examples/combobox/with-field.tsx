import { Combobox, createListCollection } from "@ark-ui/react/combobox";
import { Field } from "@ark-ui/react/field";
import { comboboxStyledSlots as comboboxMinimal, fieldStyledSlots as fieldMinimal } from "@spark-css/theme-minimal";
import { comboboxStyledSlots as comboboxPark, fieldStyledSlots as fieldPark } from "@spark-css/theme-park";
import { comboboxStyledSlots as comboboxShadcn, fieldStyledSlots as fieldShadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const comboboxStyledSlots = getTheme(
    { minimal: comboboxMinimal, park: comboboxPark, shadcn: comboboxShadcn },
    props.theme
  );
  const fieldStyledSlots = getTheme({ minimal: fieldMinimal, park: fieldPark, shadcn: fieldShadcn }, props.theme);
  const collection = createListCollection({ items: ["React", "Solid", "Vue"] });

  return (
    <Field.Root {...props} className={clsx(fieldStyledSlots.root)}>
      <Combobox.Root className={clsx(comboboxStyledSlots.root)} collection={collection}>
        <Combobox.Label className={clsx(comboboxStyledSlots.label)}>Label</Combobox.Label>
        <Combobox.Control className={clsx(comboboxStyledSlots.control)}>
          <Combobox.Input className={clsx(comboboxStyledSlots.input)} />
          <Combobox.Trigger className={clsx(comboboxStyledSlots.trigger)}>Open</Combobox.Trigger>
          <Combobox.ClearTrigger className={clsx(comboboxStyledSlots.clearTrigger)}>Clear</Combobox.ClearTrigger>
        </Combobox.Control>
        <Combobox.Positioner className={clsx(comboboxStyledSlots.positioner)}>
          <Combobox.Content className={clsx(comboboxStyledSlots.content)}>
            {collection.items.map((item) => (
              <Combobox.Item className={clsx(comboboxStyledSlots.item)} key={item} item={item}>
                <Combobox.ItemText className={clsx(comboboxStyledSlots.itemText)}>{item}</Combobox.ItemText>
                <Combobox.ItemIndicator className={clsx(comboboxStyledSlots.itemIndicator)}>✓</Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Combobox.Root>
      <Field.HelperText className={clsx(fieldStyledSlots.helperText)}>Additional Info</Field.HelperText>
      <Field.ErrorText className={clsx(fieldStyledSlots.errorText)}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
