import { Accordion } from "@ark-ui/react/accordion";
import { accordionStyledSlots as minimal } from "@spark-css/theme-minimal";
import { accordionStyledSlots as park } from "@spark-css/theme-park";
import { accordionStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RenderProp = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const items = ["panel-1", "panel-2", "panel-3"];

  return (
    <Accordion.Root className={clsx(styledSlots.root)}>
      {items.map((item) => (
        <Accordion.Item key={item} value={item} className={clsx(styledSlots.item)}>
          <Accordion.ItemContext>
            {(accordionItem) => (
              <>
                <Accordion.ItemTrigger className={clsx(styledSlots.itemTrigger)}>
                  {accordionItem.expanded ? "Expanded" : "Closed"}
                </Accordion.ItemTrigger>
                <Accordion.ItemContent className={clsx(styledSlots.itemContent)}>{item} content</Accordion.ItemContent>
              </>
            )}
          </Accordion.ItemContext>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
