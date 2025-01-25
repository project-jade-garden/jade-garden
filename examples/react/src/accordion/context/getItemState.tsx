import { Accordion } from "@ark-ui/react/accordion";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { type Theme, getTheme } from "../../utils";

export const ContextGetItemState = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal: minimal.accordion, park: park.accordion, shadcn: shadcn.accordion }, theme);
  const items = [{ value: "React" }, { value: "Solid", disabled: true }, { value: "Vue" }];

  return (
    <Accordion.Root defaultValue={["React"]} className={clsx(styledSlots.root)}>
      <Accordion.Context>
        {(context) => {
          const itemState = context.getItemState(items[2]);
          return (
            <>
              <b>Vue State: </b>
              <span>Disabled: {itemState.disabled ? "Y" : "N"} </span>
              <span>Expanded: {itemState.expanded ? "Y" : "N"} </span>
              <span>Focused: {itemState.focused ? "Y" : "N"} </span>
            </>
          );
        }}
      </Accordion.Context>
      {items.map((item) => (
        <Accordion.Item key={item.value} {...item} className={clsx(styledSlots.item)}>
          <Accordion.ItemTrigger className={clsx(styledSlots.itemTrigger)}>
            What is {item.value}?
            <Accordion.ItemIndicator className={clsx(styledSlots.itemIndicator)}>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className={clsx(styledSlots.itemContent)}>
            {item.value} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
