import { Splitter, useSplitter } from "@ark-ui/react/splitter";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.splitter, park: park.splitter, shadcn: shadcn.splitter },
    theme
  );
  const splitter = useSplitter({ defaultSize: [{ id: "a", size: 50 }] });

  return (
    <>
      <button type="button" onClick={() => splitter.setToMaxSize("a")}>
        Maximize a
      </button>

      <Splitter.RootProvider value={splitter}>
        <Splitter.Panel id="a">A</Splitter.Panel>
        <Splitter.ResizeTrigger id="a:b" />
        <Splitter.Panel id="b">B</Splitter.Panel>
      </Splitter.RootProvider>
    </>
  );
};
