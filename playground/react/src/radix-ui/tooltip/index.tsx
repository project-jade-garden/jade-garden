import * as Tooltip from "@radix-ui/react-tooltip";

export const Basic = () => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger>Hover or Focus me</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content>
          Nicely done!
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);
