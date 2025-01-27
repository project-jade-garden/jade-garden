import { Combobox, createListCollection } from "@ark-ui/react/combobox";
import { Field } from "@ark-ui/react/field";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const combobox = getTheme(
    { minimal: minimal.comboboxStyles, park: park.comboboxStyles, shadcn: shadcn.comboboxStyles },
    props.theme
  );
  const field = getTheme(
    { minimal: minimal.fieldStyles, park: park.fieldStyles, shadcn: shadcn.fieldStyles },
    props.theme
  );
  const collection = createListCollection({ items: ["React", "Solid", "Vue"] });

  return (
    <Field.Root {...props} className={clsx(field.root)}>
      <Combobox.Root className={clsx(combobox.root)} collection={collection}>
        <Combobox.Label className={clsx(combobox.label)}>Label</Combobox.Label>
        <Combobox.Control className={clsx(combobox.control)}>
          <Combobox.Input className={clsx(combobox.input)} />
          <Combobox.Trigger className={clsx(combobox.trigger)}>Open</Combobox.Trigger>
          <Combobox.ClearTrigger className={clsx(combobox.clearTrigger)}>Clear</Combobox.ClearTrigger>
        </Combobox.Control>
        <Combobox.Positioner className={clsx(combobox.positioner)}>
          <Combobox.Content className={clsx(combobox.content)}>
            {collection.items.map((item) => (
              <Combobox.Item className={clsx(combobox.item)} key={item} item={item}>
                <Combobox.ItemText className={clsx(combobox.itemText)}>{item}</Combobox.ItemText>
                <Combobox.ItemIndicator className={clsx(combobox.itemIndicator)}>✓</Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Combobox.Root>
      <Field.HelperText className={clsx(field.helperText)}>Additional Info</Field.HelperText>
      <Field.ErrorText className={clsx(field.errorText)}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
