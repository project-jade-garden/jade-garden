import * as Tabs from "@radix-ui/react-tabs";

export const Basic = () => (
  <>
    <h1>Horizontal (automatic activation)</h1>
    <Tabs.Root defaultValue="tab1">
      <Tabs.List aria-label="tabs example">
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2" disabled>
          Tab 2
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        Dis metus rhoncus sit convallis sollicitudin vel cum, hac purus tincidunt eros sem himenaeos integer, faucibus
        varius nullam nostra bibendum consectetur mollis, gravida elementum pellentesque volutpat dictum ipsum.
      </Tabs.Content>
      <Tabs.Content value="tab2">You'll never find me!</Tabs.Content>
      <Tabs.Content value="tab3">
        Ut nisi elementum metus semper mauris dui fames accumsan aenean, maecenas ac sociis dolor quam tempus pretium.
      </Tabs.Content>
    </Tabs.Root>

    <h1>Vertical (manual activation)</h1>
    <Tabs.Root defaultValue="tab1" orientation="vertical" activationMode="manual">
      <Tabs.List aria-label="tabs example">
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2" disabled>
          Tab 2
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        Dis metus rhoncus sit convallis sollicitudin vel cum, hac purus tincidunt eros sem himenaeos integer, faucibus
        varius nullam nostra bibendum consectetur mollis, gravida elementum pellentesque volutpat dictum ipsum.
      </Tabs.Content>
      <Tabs.Content value="tab2">You'll never find me!</Tabs.Content>
      <Tabs.Content value="tab3">
        Ut nisi elementum metus semper mauris dui fames accumsan aenean, maecenas ac sociis dolor quam tempus pretium.
      </Tabs.Content>
    </Tabs.Root>
  </>
);
