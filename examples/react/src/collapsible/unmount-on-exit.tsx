import { Collapsible } from "@ark-ui/react/collapsible";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const UnmountOnExit = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.collapsible,
      park: park.collapsible,
      shadcn: shadcn.collapsible
    },
    theme
  );

  return (
    <Collapsible.Root unmountOnExit className={clsx(styledSlots.root)}>
      <Collapsible.Trigger className={clsx(styledSlots.trigger)}>Toggle</Collapsible.Trigger>
      <Collapsible.Content className={clsx(styledSlots.content)}>Content</Collapsible.Content>
    </Collapsible.Root>
  );
};
