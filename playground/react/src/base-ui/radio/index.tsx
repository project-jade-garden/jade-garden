import { Radio } from "@base-ui-components/react/radio";
import { RadioGroup } from "@base-ui-components/react/radio-group";

export const Basic = () => {
  return (
    <RadioGroup aria-labelledby="apples-caption" defaultValue="fuji-apple">
      <div>Best apple</div>

      <label htmlFor="">
        <Radio.Root value="fuji-apple">
          <Radio.Indicator />
        </Radio.Root>
        Fuji
      </label>

      <label htmlFor="">
        <Radio.Root value="gala-apple">
          <Radio.Indicator />
        </Radio.Root>
        Gala
      </label>

      <label htmlFor="">
        <Radio.Root value="granny-smith-apple">
          <Radio.Indicator />
        </Radio.Root>
        Granny Smith
      </label>
    </RadioGroup>
  );
};
