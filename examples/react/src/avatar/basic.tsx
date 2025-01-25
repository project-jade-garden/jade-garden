import { Avatar } from "@ark-ui/react/avatar";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.avatar, park: park.avatar, shadcn: shadcn.avatar },
    theme
  );

  return (
    <Avatar.Root className={clsx(styledSlots.root)}>
      <Avatar.Fallback className={clsx(styledSlots.fallback)}>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" className={clsx(styledSlots.image)} />
    </Avatar.Root>
  );
};
