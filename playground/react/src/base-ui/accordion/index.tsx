import { Accordion } from "@base-ui-components/react/accordion";

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 12 12" fill="currentcolor" {...props}>
      <title>Plus Icon</title>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  );
}

export const Basic = () => {
  return (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>
            What is Base UI?
            <PlusIcon />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div>Base UI is a library of high-quality unstyled React components for design systems and web apps.</div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>
            How do I get started?
            <PlusIcon />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div>
            Head to the “Quick start” guide in the docs. If you’ve used unstyled libraries before, you’ll feel at home.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger>
            Can I use it for my project?
            <PlusIcon />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel>
          <div>Of course! Base UI is free and open source.</div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
};
