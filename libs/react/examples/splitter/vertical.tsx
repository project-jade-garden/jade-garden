import { Splitter } from "@ark-ui/react/splitter";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Vertical = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.splitterStyledSlots, park: park.splitterStyledSlots, shadcn: shadcn.splitterStyledSlots },
    theme
  );

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
