import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Toggle } from "@radix-ui/react-toggle";
import * as Toolbar from "@radix-ui/react-toolbar";

type ToolbarProps = {
  title: string;
  dir?: Toolbar.ToolbarProps["dir"];
  orientation?: Toolbar.ToolbarProps["orientation"];
};

const ToolbarExample = ({ title, dir, orientation }: ToolbarProps) => {
  return (
    <div style={{ padding: 1, margin: -1 }}>
      <h1>{title}</h1>
      <Toolbar.Root orientation={orientation} loop={true} aria-label={`${title} toolbar`} dir={dir}>
        <Toolbar.Button>Button</Toolbar.Button>
        <Toolbar.Button disabled>Button (disabled)</Toolbar.Button>
        <Toolbar.Separator />
        <Toolbar.Link
          href="https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/toolbar/toolbar.html"
          target="_blank"
        >
          Link
        </Toolbar.Link>
        <Toolbar.Separator />
        <Toolbar.Button asChild>
          <Toggle>Toggle</Toggle>
        </Toolbar.Button>
        <Toolbar.Separator />
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem value="left">Left</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="center">Center</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="right">Right</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator />
        <DropdownMenu.Root>
          <Toolbar.Button asChild>
            <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>
          </Toolbar.Button>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Undo</DropdownMenu.Item>
            <DropdownMenu.Item>Redo</DropdownMenu.Item>
            <DropdownMenu.Arrow />
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Toolbar.Root>
    </div>
  );
};

export const Basic = () => (
  <>
    <ToolbarExample title="Horizontal" />
    <ToolbarExample title="Vertical" orientation="vertical" />
  </>
);
