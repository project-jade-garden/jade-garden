import { Menu as ArkMenu } from "@ark-ui/react";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

interface Item {
  name: string;
  uid: string;
}

interface Props {
  id: string;
  label: string;
  items: Item[];
  onSelect?: (uid: string) => void;
}

const Menu = (props: Props & { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.menuStyledSlots, park: park.menuStyledSlots, shadcn: shadcn.menuStyledSlots },
    props.theme
  );
  const { id, label, items, onSelect } = props;

  return (
    <ArkMenu.Root onSelect={(changes) => onSelect?.(changes.value)} id={id}>
      <ArkMenu.Trigger style={{ fontSize: "18px", padding: "12px" }} className={clsx(styledSlots.trigger)}>
        {label} ⬇️
      </ArkMenu.Trigger>
      <ArkMenu.Positioner className={clsx(styledSlots.positioner)}>
        <ArkMenu.Content className={clsx(styledSlots.content)}>
          {items.map(({ name, uid }) => {
            return (
              <ArkMenu.Item key={uid} value={uid} className={clsx(styledSlots.item, "item")}>
                <ArkMenu.ItemIndicator className={clsx(styledSlots.itemIndicator)}>✅</ArkMenu.ItemIndicator>
                {name}
              </ArkMenu.Item>
            );
          })}
        </ArkMenu.Content>
      </ArkMenu.Positioner>
    </ArkMenu.Root>
  );
};

const items = [
  { name: "one", uid: "one" },
  { name: "two", uid: "two" },
  { name: "three", uid: "three" }
];

export const MultipleMenu = ({ theme }: { theme: Theme }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Menu theme={theme} id="first" label="First" items={items} />
      <Menu theme={theme} id="second" label="Second" items={items} />
    </div>
  );
};
