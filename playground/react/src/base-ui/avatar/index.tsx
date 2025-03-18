import { Avatar } from "@base-ui-components/react/avatar";

export const Basic = () => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Avatar.Root>
        <Avatar.Image
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          width="48"
          height="48"
        />
        <Avatar.Fallback>LT</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>LT</Avatar.Root>
    </div>
  );
};
