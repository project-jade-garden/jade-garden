import { Meter } from "@kobalte/core/meter";

export const Basic = () => {
  return (
    <Meter value={80} class="meter">
      <div class="meter__label-container">
        <Meter.Label class="meter__label">Battery Level:</Meter.Label>
        <Meter.ValueLabel class="meter__value-label" />
      </div>
      <Meter.Track class="meter__track">
        <Meter.Fill class="meter__fill" />
      </Meter.Track>
    </Meter>
  );
};
