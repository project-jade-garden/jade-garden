import { Splitter } from "@ark-ui/react/splitter";
import { splitterStyledSlots as minimal } from "@spark-css/theme-minimal";
import { splitterStyledSlots as park } from "@spark-css/theme-park";
import { splitterStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RenderProp = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Splitter.Root
      defaultSize={[
        { id: "a", size: 50 },
        { id: "b", size: 50 }
      ]}
    >
      <Splitter.Context>
        {(splitter) => (
          <>
            <Splitter.Panel id="a">
              <button type="button" onClick={() => splitter.setSize("a", 10)}>
                Set to 10%
              </button>
            </Splitter.Panel>
            <Splitter.ResizeTrigger id="a:b" />
            <Splitter.Panel id="b">
              <button type="button" onClick={() => splitter.setSize("b", 10)}>
                Set to 10%
              </button>
            </Splitter.Panel>
          </>
        )}
      </Splitter.Context>
    </Splitter.Root>
  );
};
