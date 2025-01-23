import { Collapsible } from "@ark-ui/react/collapsible";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const OnExitComplete = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.collapsibleStyledSlots,
      park: park.collapsibleStyledSlots,
      shadcn: shadcn.collapsibleStyledSlots
    },
    theme
  );

  return (
    <Collapsible.Root onExitComplete={() => alert("on exit")} className={clsx(styledSlots.root)}>
      <Collapsible.Trigger className={clsx(styledSlots.trigger)}>Toggle</Collapsible.Trigger>
      <Collapsible.Content className={clsx(styledSlots.content)}>Content</Collapsible.Content>
    </Collapsible.Root>
  );
};
