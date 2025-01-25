import { Field } from "@ark-ui/react/field";
import { TagsInput } from "@ark-ui/react/tags-input";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.tagsInput, park: park.tagsInput, shadcn: shadcn.tagsInput },
    props.theme
  );

  return (
    <Field.Root {...props}>
      <TagsInput.Root>
        <TagsInput.Context>
          {(tagsInput) => (
            <>
              <TagsInput.Label>Label</TagsInput.Label>
              <TagsInput.Control>
                {tagsInput.value.map((value, index) => (
                  <TagsInput.Item key={index} index={index} value={value}>
                    <TagsInput.ItemPreview>
                      <TagsInput.ItemText>{value}</TagsInput.ItemText>
                      <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                    </TagsInput.ItemPreview>
                    <TagsInput.ItemInput />
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
      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
