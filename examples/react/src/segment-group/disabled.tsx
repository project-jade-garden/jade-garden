import { SegmentGroup } from "@ark-ui/react/segment-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Disabled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.segmentGroup,
      park: park.segmentGroup,
      shadcn: shadcn.segmentGroup
    },
    theme
  );
  const frameworks = ["React", "Solid", "Svelte", "Vue"];

  return (
    <SegmentGroup.Root defaultValue="React">
      <SegmentGroup.Indicator />
      {frameworks.map((framework) => (
        <SegmentGroup.Item key={framework} value={framework} disabled={framework === "Svelte"}>
          <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
          <SegmentGroup.ItemControl />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
};
