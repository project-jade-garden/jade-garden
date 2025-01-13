import { Menu } from "@ark-ui/react/menu";
import { menuStyledSlots as minimal } from "@spark-css/theme-minimal";
import { menuStyledSlots as park } from "@spark-css/theme-park";
import { menuStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RenderProp = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Menu.Root>
      <Menu.Context>{(menu) => <Menu.Trigger>Menu is {menu.open ? "open" : "closed"}</Menu.Trigger>}</Menu.Context>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="react">
            <Menu.ItemContext>
              {(menuItem) => <>React is {menuItem.highlighted ? "highlighted" : "not highlighted"}</>}
            </Menu.ItemContext>
          </Menu.Item>
          <Menu.Item value="solid">Solid</Menu.Item>
          <Menu.Item value="vue">Vue</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
