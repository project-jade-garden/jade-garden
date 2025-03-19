import { Switch } from "@kobalte/core/switch";

export const Basic = () => {
  return (
    <Switch class="switch">
      <Switch.Label class="switch__label">Airplane mode</Switch.Label>
      <Switch.Input class="switch__input" />
      <Switch.Control class="switch__control">
        <Switch.Thumb class="switch__thumb" />
      </Switch.Control>
    </Switch>
  );
};
