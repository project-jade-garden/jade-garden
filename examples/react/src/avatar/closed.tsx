import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { UserIcon } from "lucide-react";
import { forwardRef } from "react";
import { type Theme, getTheme } from "../utils";

export interface AvatarProps extends ArkAvatar.RootProps {
  name?: string;
  src?: string;
  theme: Theme;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { name, src, theme, ...rootProps } = props;
  const styledSlots = getTheme({ minimal: minimal.avatar, park: park.avatar, shadcn: shadcn.avatar }, theme);

  return (
    <ArkAvatar.Root ref={ref} {...rootProps} className={clsx(styledSlots.root)}>
      <ArkAvatar.Fallback className={clsx(styledSlots.fallback)}>
        {getInitials(name) || <UserIcon />}
      </ArkAvatar.Fallback>
      <ArkAvatar.Image src={src} alt={name} className={clsx(styledSlots.image)} />
    </ArkAvatar.Root>
  );
});

const getInitials = (name = "") =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
