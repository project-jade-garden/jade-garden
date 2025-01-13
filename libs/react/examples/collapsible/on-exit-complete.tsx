import { Collapsible } from "@ark-ui/react/collapsible";
import { collapsibleStyledSlots as minimal } from "@spark-css/theme-minimal";
import { collapsibleStyledSlots as park } from "@spark-css/theme-park";
import { collapsibleStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const OnExitComplete = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Collapsible.Root onExitComplete={() => alert("on exit")} className={clsx(styledSlots.root)}>
      <Collapsible.Trigger className={clsx(styledSlots.trigger)}>Toggle</Collapsible.Trigger>
      <Collapsible.Content className={clsx(styledSlots.content)}>Content</Collapsible.Content>
    </Collapsible.Root>
  );
};
