import * as Popover from "@radix-ui/react-popover";

export const Basic = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "200vh" }}>
      <Popover.Root>
        <Popover.Trigger>open</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            <Popover.Close>close</Popover.Close>
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <input />
    </div>
  );
};
