import * as ContextMenu from "@radix-ui/react-context-menu";

export const Basic = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "200vw",
      height: "200vh",
      gap: 20
    }}
  >
    <ContextMenu.Root>
      <ContextMenu.Trigger>Right click here</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content>
          <ContextMenu.Item>Undo</ContextMenu.Item>
          <ContextMenu.Item>Redo</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item>Cut</ContextMenu.Item>
          <ContextMenu.Item>Copy</ContextMenu.Item>
          <ContextMenu.Item>Paste</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  </div>
);
