import { Splitter } from "@ark-ui/react/splitter";
import { splitterStyledSlots as minimal } from "@spark-css/theme-minimal";
import { splitterStyledSlots as park } from "@spark-css/theme-park";
import { splitterStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Events = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Splitter.Root
      defaultSize={[
        { id: "a", size: 50 },
        { id: "b", size: 50 }
      ]}
      onSizeChange={(details) => console.log("onSizeChange", details)}
      onSizeChangeEnd={(details) => console.log("onSizeChangeEnd", details)}
    >
      <Splitter.Panel id="a">A</Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b">B</Splitter.Panel>
    </Splitter.Root>
  );
};
