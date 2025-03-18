import { Label } from "@radix-ui/react-label";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Basic = () => (
  <Label>
    Favourite pet
    <RadioGroup.Root defaultValue="1">
      <Label>
        <RadioGroup.Item value="1">
          <RadioGroup.Indicator />
        </RadioGroup.Item>
        Cat
      </Label>{" "}
      <Label>
        <RadioGroup.Item value="2">
          <RadioGroup.Indicator />
        </RadioGroup.Item>
        Dog
      </Label>{" "}
      <Label>
        <RadioGroup.Item value="3">
          <RadioGroup.Indicator />
        </RadioGroup.Item>
        Rabbit
      </Label>
    </RadioGroup.Root>
  </Label>
);
