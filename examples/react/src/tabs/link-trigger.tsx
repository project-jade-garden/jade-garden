import { Tabs } from "@ark-ui/react/tabs";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithLinkTrigger = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.tabsStyles, park: park.tabsStyles, shadcn: shadcn.tabsStyles },
    theme
  );

  return (
    <Tabs.Root defaultValue="react">
      <Tabs.List>
        <Tabs.Trigger value="react" asChild>
          <a href="#react">React</a>
        </Tabs.Trigger>
        <Tabs.Trigger value="vue" asChild>
          <a href="#vue">Vue</a>
        </Tabs.Trigger>
        <Tabs.Trigger value="solid" asChild>
          <a href="#solid">Solid</a>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="react">React Content</Tabs.Content>
      <Tabs.Content value="vue">Vue Content</Tabs.Content>
      <Tabs.Content value="solid">Solid Content</Tabs.Content>
    </Tabs.Root>
  );
};
