import { RatingGroup } from "@ark-ui/react/rating-group";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    {
      minimal: minimal.ratingGroupStyles,
      park: park.ratingGroupStyles,
      shadcn: shadcn.ratingGroupStyles
    },
    theme
  );
  const [value, setValue] = useState(0);

  return (
    <RatingGroup.Root count={5} value={value} onValueChange={(details) => setValue(details.value)} allowHalf>
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
  );
};
