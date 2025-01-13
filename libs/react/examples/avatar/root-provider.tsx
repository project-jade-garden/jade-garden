import { Avatar, useAvatar } from "@ark-ui/react/avatar";
import { avatarStyledSlots as minimal } from "@spark-css/theme-minimal";
import { avatarStyledSlots as park } from "@spark-css/theme-park";
import { avatarStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const avatar = useAvatar();

  return (
    <>
      <button type="button" onClick={() => avatar.setSrc("https://new-source.com")}>
        Change Source
      </button>

      <Avatar.RootProvider value={avatar} className={clsx(styledSlots.root)}>
        <Avatar.Fallback className={clsx(styledSlots.fallback)}>PA</Avatar.Fallback>
        <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" className={clsx(styledSlots.image)} />
      </Avatar.RootProvider>
    </>
  );
};
