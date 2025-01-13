import { Accordion, useAccordion } from "@ark-ui/react/accordion";
import { accordionStyledSlots as minimal } from "@spark-css/theme-minimal";
import { accordionStyledSlots as park } from "@spark-css/theme-park";
import { accordionStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const accordion = useAccordion({ defaultValue: ["React"] });

  return (
    <>
      <button type="button" onClick={() => accordion.setValue(["Vue"])}>
        Set to Vue
      </button>

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
    </>
  );
};
