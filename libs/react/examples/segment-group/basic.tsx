import { SegmentGroup } from "@ark-ui/react/segment-group";
import { segmentGroupStyledSlots as minimal } from "@spark-css/theme-minimal";
import { segmentGroupStyledSlots as park } from "@spark-css/theme-park";
import { segmentGroupStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const frameworks = ["React", "Solid", "Svelte", "Vue"];

  return (
    <SegmentGroup.Root>
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
