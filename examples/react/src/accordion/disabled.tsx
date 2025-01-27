import { Accordion } from "@ark-ui/react/accordion";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Disabled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.accordionStyles, park: park.accordionStyles, shadcn: shadcn.accordionStyles },
    theme
  );
  const items = ["panel-1", "panel-2", "panel-3"];

  return (
    <Accordion.Root className={clsx(styledSlots.root)}>
      {items.map((item) => (
        <Accordion.Item key={item} value={item} disabled={item === "panel-2"} className={clsx(styledSlots.item)}>
          <Accordion.ItemTrigger className={clsx(styledSlots.itemTrigger)}>{item} trigger</Accordion.ItemTrigger>
          <Accordion.ItemContent className={clsx(styledSlots.itemContent)}>{item} content</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
