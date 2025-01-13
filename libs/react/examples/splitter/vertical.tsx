import { Splitter } from "@ark-ui/react/splitter";
import { splitterStyledSlots as minimal } from "@spark-css/theme-minimal";
import { splitterStyledSlots as park } from "@spark-css/theme-park";
import { splitterStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Vertical = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Splitter.Root
      orientation="vertical"
      defaultSize={[
        { id: "a", size: 50 },
        { id: "b", size: 50 }
      ]}
    >
      <Splitter.Panel id="a">A</Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b">B</Splitter.Panel>
    </Splitter.Root>
  );
};
