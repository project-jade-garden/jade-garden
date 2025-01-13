import { Field } from "@ark-ui/react/field";
import { RatingGroup } from "@ark-ui/react/rating-group";
import { ratingGroupStyledSlots as minimal } from "@spark-css/theme-minimal";
import { ratingGroupStyledSlots as park } from "@spark-css/theme-park";
import { ratingGroupStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { StarIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const WithField = (props: Field.RootProps & { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, props.theme);

  return (
    <Field.Root {...props}>
      <RatingGroup.Root count={5} defaultValue={3}>
        <RatingGroup.Label>Label</RatingGroup.Label>
        <RatingGroup.Control>
          <RatingGroup.Context>
            {({ items }) =>
              items.map((item) => (
                <RatingGroup.Item key={item} index={item}>
                  <RatingGroup.ItemContext>
                    {({ highlighted }) => (highlighted ? <StarIcon fill="current" /> : <StarIcon />)}
                  </RatingGroup.ItemContext>
                </RatingGroup.Item>
              ))
            }
          </RatingGroup.Context>
          <RatingGroup.HiddenInput />
        </RatingGroup.Control>
      </RatingGroup.Root>

      <Field.HelperText>Additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
