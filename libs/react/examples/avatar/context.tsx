import { Avatar } from "@ark-ui/react/avatar";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Context = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.avatarStyledSlots, park: park.avatarStyledSlots, shadcn: shadcn.avatarStyledSlots },
    theme
  );

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
