import { Menu } from "@ark-ui/react/menu";
import { Portal } from "@ark-ui/react/portal";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Nested = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.menuStyledSlots, park: park.menuStyledSlots, shadcn: shadcn.menuStyledSlots },
    theme
  );

  return (
    <Menu.Root>
      <Menu.Trigger className={clsx(styledSlots.trigger)}>Open menu</Menu.Trigger>
      <Menu.Positioner className={clsx(styledSlots.positioner)}>
        <Menu.Content className={clsx(styledSlots.content)}>
          <Menu.Root>
            <Menu.TriggerItem className={clsx(styledSlots.triggerItem)}>JS Frameworks</Menu.TriggerItem>
            <Portal>
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
            </Portal>
          </Menu.Root>
          <Menu.Root>
            <Menu.TriggerItem className={clsx(styledSlots.triggerItem)}>CSS Frameworks</Menu.TriggerItem>
            <Portal>
              <Menu.Positioner className={clsx(styledSlots.positioner)}>
                <Menu.Content className={clsx(styledSlots.content)}>
                  <Menu.Item value="panda" className={clsx(styledSlots.item)}>
                    Panda
                  </Menu.Item>
                  <Menu.Item value="tailwind" className={clsx(styledSlots.item)}>
                    Tailwind
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
