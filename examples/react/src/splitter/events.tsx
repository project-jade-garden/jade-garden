import { Splitter } from "@ark-ui/react/splitter";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Events = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal: minimal.splitter, park: park.splitter, shadcn: shadcn.splitter }, theme);

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
