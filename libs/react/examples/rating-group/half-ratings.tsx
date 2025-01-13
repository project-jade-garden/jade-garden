import { RatingGroup } from "@ark-ui/react/rating-group";
import { ratingGroupStyledSlots as minimal } from "@spark-css/theme-minimal";
import { ratingGroupStyledSlots as park } from "@spark-css/theme-park";
import { ratingGroupStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { StarHalfIcon, StarIcon } from "lucide-react";
import { type Theme, getTheme } from "../utils";

export const HalfRatings = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <RatingGroup.Root count={5} defaultValue={3} allowHalf>
      <RatingGroup.Label>Label</RatingGroup.Label>
      <RatingGroup.Control>
        <RatingGroup.Context>
          {({ items }) =>
            items.map((item) => (
              <RatingGroup.Item key={item} index={item}>
                <RatingGroup.ItemContext>
                  {({ half, highlighted }) => {
                    if (half) return <StarHalfIcon fill="current" />;
                    if (highlighted) return <StarIcon fill="current" />;
                    return <StarIcon />;
                  }}
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
