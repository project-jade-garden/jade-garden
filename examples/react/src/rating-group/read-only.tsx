import { RatingGroup } from "@ark-ui/react/rating-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { StarIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const ReadOnly = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.ratingGroup,
      park: park.ratingGroup,
      shadcn: shadcn.ratingGroup
    },
    theme
  );

  return (
    <RatingGroup.Root count={5} defaultValue={3} readOnly>
      <RatingGroup.Label>Label</RatingGroup.Label>
      <RatingGroup.Control>
        <RatingGroup.Context>
          {({ items }) =>
            items.map((item) => (
              <RatingGroup.Item key={item} index={item}>
                <RatingGroup.ItemContext>
                  {({ highlighted }) => (highlighted ? <StarIcon fill="currrent" /> : <StarIcon />)}
                </RatingGroup.ItemContext>
              </RatingGroup.Item>
            ))
          }
        </RatingGroup.Context>
        <RatingGroup.HiddenInput />
      </RatingGroup.Control>
    </RatingGroup.Root>
  );
};
