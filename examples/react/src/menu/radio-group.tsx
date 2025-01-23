import { Menu } from "@ark-ui/react/menu";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const RadioGroup = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.menuStyledSlots, park: park.menuStyledSlots, shadcn: shadcn.menuStyledSlots },
    theme
  );
  const [value, setValue] = useState("React");

  return (
    <Menu.Root>
      <Menu.Trigger className={clsx(styledSlots.trigger)}>Open menu</Menu.Trigger>
      <Menu.Positioner className={clsx(styledSlots.positioner)}>
        <Menu.Content className={clsx(styledSlots.content)}>
          <Menu.RadioItemGroup value={value} onValueChange={(e) => setValue(e.value)}>
            <Menu.ItemGroupLabel className={clsx(styledSlots.itemGroupLabel)}>JS Frameworks</Menu.ItemGroupLabel>
            {["React", "Solid", "Vue"].map((framework) => (
              <Menu.RadioItem key={framework} value={framework}>
                <Menu.ItemIndicator className={clsx(styledSlots.itemIndicator)}>✅</Menu.ItemIndicator>
                <Menu.ItemText className={clsx(styledSlots.itemText)}>{framework}</Menu.ItemText>
              </Menu.RadioItem>
            ))}
          </Menu.RadioItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
