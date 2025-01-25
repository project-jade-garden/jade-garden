import { Menu, useMenu } from "@ark-ui/react/menu";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.menu, park: park.menu, shadcn: shadcn.menu },
    theme
  );
  const menu = useMenu();

  return (
    <>
      <button type="button" onClick={() => menu.api.setHighlightedValue("solid")}>
        Highlight Solid
      </button>

      <Menu.RootProvider value={menu}>
        <Menu.Trigger className={clsx(styledSlots.trigger)}>
          Open menu <Menu.Indicator className={clsx(styledSlots.indicator)}>➡️</Menu.Indicator>
        </Menu.Trigger>
        <Menu.Positioner className={clsx(styledSlots.positioner)}>
          <Menu.Content className={clsx(styledSlots.content)}>
            <Menu.Item value="react" className={clsx(styledSlots.item)}>
              React
            </Menu.Item>
            <Menu.Item value="solid" className={clsx(styledSlots.item)}>
              Solid
            </Menu.Item>
            <Menu.Item value="vue" className={clsx(styledSlots.item)}>
              Vue
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.RootProvider>
    </>
  );
};
