import { Separator } from "@radix-ui/react-separator";

export const Basic = () => (
  <>
    <h1>Horizontal</h1>
    <p>The following separator is horizontal and has semantic meaning.</p>
    <Separator orientation="horizontal" />
    <p>
      The following separator is horizontal and is purely decorative. Assistive technology will ignore this element.
    </p>
    <Separator orientation="horizontal" decorative />

    <h1>Vertical</h1>
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>The following separator is vertical and has semantic meaning.</p>
      <Separator orientation="vertical" />
      <p>
        The following separator is vertical and is purely decorative. Assistive technology will ignore this element.
      </p>
      <Separator orientation="vertical" decorative />
    </div>
  </>
);
