import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Basic = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "200vh" }}>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Undo</DropdownMenu.Item>
          <DropdownMenu.Item>Redo</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Cut</DropdownMenu.Item>
          <DropdownMenu.Item>Copy</DropdownMenu.Item>
          <DropdownMenu.Item>Paste</DropdownMenu.Item>
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </div>
);
