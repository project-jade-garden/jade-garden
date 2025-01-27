import { TagsInput } from "@ark-ui/react/tags-input";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const OnEvent = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.tagsInputStyles, park: park.tagsInputStyles, shadcn: shadcn.tagsInputStyles },
    theme
  );

  return (
    <TagsInput.Root
      onValueChange={(details) => {
        console.log("tags changed to:", details.value);
      }}
      onHighlightChange={(details) => {
        console.log("highlighted tag:", details.highlightedValue);
      }}
      onValueInvalid={(details) => {
        console.log("Invalid!", details.reason);
      }}
      max={3}
      allowOverflow
      validate={(details) => {
        return !details.value.includes(details.inputValue);
      }}
    >
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label>Frameworks</TagsInput.Label>
            <TagsInput.Control>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item key={index} index={index} value={value}>
                  <TagsInput.ItemInput />
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input placeholder="Add Framework" />
            <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  );
};
