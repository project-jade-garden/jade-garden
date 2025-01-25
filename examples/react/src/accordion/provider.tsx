import { Accordion, useAccordion } from "@ark-ui/react/accordion";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const Provider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.accordion, park: park.accordion, shadcn: shadcn.accordion },
    theme
  );
  const accordion = useAccordion({
    multiple: true,
    onValueChange: (details) => console.log(details)
  });

  return (
    <Accordion.RootProvider value={accordion} className={clsx(styledSlots.root)}>
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
    </Accordion.RootProvider>
  );
};
