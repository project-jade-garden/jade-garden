import { Menu } from "@ark-ui/react/menu";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RenderProp = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.menuStyles, park: park.menuStyles, shadcn: shadcn.menuStyles },
    theme
  );

  return (
    <Menu.Root>
      <Menu.Context>
        {(menu) => (
          <Menu.Trigger className={clsx(styledSlots.trigger)}>Menu is {menu.open ? "open" : "closed"}</Menu.Trigger>
        )}
      </Menu.Context>
      <Menu.Positioner className={clsx(styledSlots.positioner)}>
        <Menu.Content className={clsx(styledSlots.content)}>
          <Menu.Item value="react" className={clsx(styledSlots.item)}>
            <Menu.ItemContext>
              {(menuItem) => <>React is {menuItem.highlighted ? "highlighted" : "not highlighted"}</>}
            </Menu.ItemContext>
          </Menu.Item>
          <Menu.Item value="solid" className={clsx(styledSlots.item)}>
            Solid
          </Menu.Item>
          <Menu.Item value="vue" className={clsx(styledSlots.item)}>
            Vue
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
