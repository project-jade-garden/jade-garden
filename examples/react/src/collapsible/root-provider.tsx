import { Collapsible, useCollapsible } from "@ark-ui/react/collapsible";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.collapsibleStyles,
      park: park.collapsibleStyles,
      shadcn: shadcn.collapsibleStyles
    },
    theme
  );
  const collapsible = useCollapsible();

  return (
    <>
      <span>{collapsible.visible ? "Visible" : "Hidden"}</span>

      <Collapsible.RootProvider value={collapsible} className={clsx(styledSlots.root)}>
        <Collapsible.Trigger className={clsx(styledSlots.trigger)}>Toggle</Collapsible.Trigger>
        <Collapsible.Content className={clsx(styledSlots.content)}>Content</Collapsible.Content>
      </Collapsible.RootProvider>
    </>
  );
};
