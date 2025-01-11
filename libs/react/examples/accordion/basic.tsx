import { Accordion } from "@ark-ui/react/accordion";
import { accordionStyledSlots as parkUi } from "@spark-css/theme-park";
import { accordionStyledSlots as shadcnUi } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { ChevronDownIcon } from "lucide-react";

export const Basic = () => {
  const styledSlots = parkUi;

  return (
    <Accordion.Root defaultValue={["React"]} className={clsx(styledSlots.root)}>
      {["React", "Solid", "Vue"].map((item) => (
        <Accordion.Item key={item} value={item} className={styledSlots.item}>
          <Accordion.ItemTrigger className={clsx(styledSlots.itemTrigger)}>
            What is {item}?
            <Accordion.ItemIndicator className={clsx(styledSlots.itemIndicator)}>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className={clsx(styledSlots.itemContent)}>
            {item} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
