import { Avatar } from "@ark-ui/react/avatar";
import { avatarStyledSlots as minimal } from "@spark-css/theme-minimal";
import { avatarStyledSlots as park } from "@spark-css/theme-park";
import { avatarStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Context = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Avatar.Root className={clsx(styledSlots.root)}>
      <Avatar.Context>
        {(avatar) => (
          <Avatar.Fallback className={clsx(styledSlots.fallback)}>{avatar.loaded ? "PA" : "Loading"}</Avatar.Fallback>
        )}
      </Avatar.Context>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" className={clsx(styledSlots.image)} />
    </Avatar.Root>
  );
};
