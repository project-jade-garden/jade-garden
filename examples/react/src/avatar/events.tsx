import { Avatar } from "@ark-ui/react/avatar";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Events = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.avatar, park: park.avatar, shadcn: shadcn.avatar },
    theme
  );

  const handleStatusChange = (details: Avatar.StatusChangeDetails) => {
    console.log(details.status);
  };

  return (
    <Avatar.Root onStatusChange={handleStatusChange} className={clsx(styledSlots.root)}>
      <Avatar.Fallback className={clsx(styledSlots.fallback)}>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/3000" alt="avatar" className={clsx(styledSlots.image)} />
    </Avatar.Root>
  );
};
