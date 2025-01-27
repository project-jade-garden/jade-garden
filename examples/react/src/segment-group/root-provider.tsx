import { SegmentGroup, useSegmentGroup } from "@ark-ui/react/segment-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.segmentGroupStyles,
      park: park.segmentGroupStyles,
      shadcn: shadcn.segmentGroupStyles
    },
    theme
  );
  const frameworks = ["React", "Solid", "Svelte", "Vue"];
  const segmentGroup = useSegmentGroup();

  return (
    <>
      <button type="button" onClick={() => segmentGroup.focus()}>
        Focus
      </button>

      <SegmentGroup.RootProvider value={segmentGroup}>
        <SegmentGroup.Indicator />
        {frameworks.map((framework) => (
          <SegmentGroup.Item key={framework} value={framework}>
            <SegmentGroup.ItemText>{framework}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl />
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.RootProvider>
    </>
  );
};
