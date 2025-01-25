import { Accordion } from "@ark-ui/react/accordion";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { type Theme, getTheme } from "../../utils";

export const ContextFocusedValue = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal: minimal.accordion, park: park.accordion, shadcn: shadcn.accordion }, theme);

  return (
    <Accordion.Root defaultValue={["React"]} className={clsx(styledSlots.root)}>
      <Accordion.Context>{(context) => <span>Focused item: {context.focusedValue}</span>}</Accordion.Context>
      {["React", "Solid", "Vue"].map((item) => (
        <Accordion.Item key={item} value={item} className={clsx(styledSlots.item)}>
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
