import { Tabs } from "@ark-ui/react/tabs";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const DisabledTab = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.tabs, park: park.tabs, shadcn: shadcn.tabs },
    theme
  );

  return (
    <Tabs.Root defaultValue="react">
      <Tabs.List>
        <Tabs.Trigger value="react">React</Tabs.Trigger>
        <Tabs.Trigger value="vue" disabled>
          Vue
        </Tabs.Trigger>
        <Tabs.Trigger value="solid">Solid</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="react">React Content</Tabs.Content>
      <Tabs.Content value="vue">Vue Content</Tabs.Content>
      <Tabs.Content value="solid">Solid Content</Tabs.Content>
    </Tabs.Root>
  );
};
