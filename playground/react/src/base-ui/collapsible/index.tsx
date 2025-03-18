import { Collapsible } from "@base-ui-components/react/collapsible";

function ChevronIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <title>Chevron Icon</title>
      <path d="M3.5 9L7.5 5L3.5 1" stroke="currentcolor" />
    </svg>
  );
}

export const Basic = () => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>
        <ChevronIcon />
        Recovery keys
      </Collapsible.Trigger>
      <Collapsible.Panel>
        <div>
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
};
