import { SegmentGroup } from "@ark-ui/react/segment-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.segmentGroupStyles,
      park: park.segmentGroupStyles,
      shadcn: shadcn.segmentGroupStyles
    },
    theme
  );
  const frameworks = ["React", "Solid", "Svelte", "Vue"];
  const [value, setValue] = useState("React");

  return (
    <SegmentGroup.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <SegmentGroup.Indicator />
      {frameworks.map((framework) => (
        <SegmentGroup.Item key={framework} value={framework}>
          <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
};
