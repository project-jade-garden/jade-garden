import { Tooltip } from "@kobalte/core/tooltip";

export const Basic = () => {
  return (
    <Tooltip>
      <Tooltip.Trigger class="tooltip__trigger">Trigger</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content class="tooltip__content">
          <Tooltip.Arrow />
          <p>Tooltip content</p>
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip>
  );
};
