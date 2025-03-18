import { Label } from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";

const POSITIONS = ["item-aligned", "popper"] as const;

const TickIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="12"
    height="12"
    fill="none"
    stroke="currentcolor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="3"
  >
    <title>Tick Icon</title>
    <path d="M2 20 L12 28 30 4" />
  </svg>
);

export const Basic = () => (
  <div style={{ display: "flex", gap: 20, padding: 50 }}>
    {POSITIONS.map((position) => (
      <Label key={position}>
        Choose a number:
        <Select.Root defaultValue="two">
          <Select.Trigger>
            <Select.Value />
            <Select.Icon />
          </Select.Trigger>
          <Select.Portal>
            <Select.Content>
              <Select.Viewport>
                <Select.Item value="one">
                  <Select.ItemText>
                    One<span aria-hidden> 👍</span>
                  </Select.ItemText>
                  <Select.ItemIndicator>
                    <TickIcon />
                  </Select.ItemIndicator>
                </Select.Item>
                <Select.Item value="two">
                  <Select.ItemText>
                    Two<span aria-hidden> 👌</span>
                  </Select.ItemText>
                  <Select.ItemIndicator>
                    <TickIcon />
                  </Select.ItemIndicator>
                </Select.Item>
                <Select.Item value="three">
                  <Select.ItemText>
                    Three<span aria-hidden> 🤘</span>
                  </Select.ItemText>
                  <Select.ItemIndicator>
                    <TickIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              </Select.Viewport>
              <Select.Arrow />
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </Label>
    ))}
  </div>
);
