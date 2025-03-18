import { DirectionProvider } from "@radix-ui/react-direction";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as React from "react";

const StoryFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rtl, setRtl] = React.useState(false);

  return (
    <div style={{ height: "100vh", backgroundColor: "#e5e8eb" }}>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: 20, paddingBottom: 30 }}>
        <label htmlFor="">
          <input type="checkbox" checked={rtl} onChange={(event) => setRtl(event.currentTarget.checked)} />
          Right-to-left
        </label>
      </div>
      <DirectionProvider dir={rtl ? "rtl" : "ltr"}>
        <div dir={rtl ? "rtl" : "ltr"}>
          <div
            style={{
              position: "relative",
              display: "flex",
              boxSizing: "border-box",
              alignItems: "center",
              padding: "15px 20px",
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: "white",
              boxShadow: "0 50px 100px -20px rgba(50,50,93,0.1),0 30px 60px -30px rgba(0,0,0,0.2)"
            }}
          >
            <button type="button">Logo</button>
            {children}
            <button type="button">Login</button>
          </div>
          <div style={{ maxWidth: 800, margin: "auto", lineHeight: 1.5, paddingTop: 25 }}>
            <h2>Test page content</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus odio, vestibulum in dictum et,{" "}
              <a href="#example">sagittis vel nibh</a>. Fusce placerat arcu lorem, a scelerisque odio fringilla sit
              amet. Suspendisse volutpat sed diam ut cursus. Nulla facilisi. Ut at volutpat nibh. Nullam justo mi,
              elementum vitae ex eu, <a href="#example">gravida dictum metus</a>. Morbi vulputate consectetur cursus.
              Fusce vitae nisi nunc. Suspendisse pellentesque aliquet tincidunt. Aenean molestie pulvinar ipsum.
            </p>

            <button type="button">Button</button>
          </div>
        </div>
      </DirectionProvider>
    </div>
  );
};

const TriggerWithIndicator: React.FC<{ children?: React.ReactNode; disabled?: boolean }> = ({ children, disabled }) => {
  return (
    <NavigationMenu.Trigger>
      {children}
      <CaretDownIcon />
    </NavigationMenu.Trigger>
  );
};

const CaretDownIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Caret Down Icon</title>
    <path
      d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

const LinkGroup: React.FC<{ items: string[]; bordered?: boolean }> = ({ items, bordered = true }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <NavigationMenu.Link
            href="#example"
            style={{
              display: "flex",
              alignItems: "center",
              color: "black"
            }}
          >
            {item}
          </NavigationMenu.Link>
        </li>
      ))}
    </ul>
  );
};

export const Basic = () => {
  return (
    <StoryFrame>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <TriggerWithIndicator>Products</TriggerWithIndicator>
            <NavigationMenu.Content>
              <LinkGroup
                bordered={false}
                items={[
                  "Fusce pellentesque",
                  "Aliquam porttitor",
                  "Pellentesque",
                  "Fusce pellentesque",
                  "Aliquam porttitor",
                  "Pellentesque"
                ]}
              />
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <TriggerWithIndicator>Company</TriggerWithIndicator>
            <NavigationMenu.Content>
              <LinkGroup bordered={false} items={["Fusce pellentesque", "Aliquam porttitor", "Pellentesque"]} />
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <TriggerWithIndicator disabled>Developers</TriggerWithIndicator>
            <NavigationMenu.Content>
              <LinkGroup bordered={false} items={["Aliquam porttitor", "Pellentesque"]} />
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link href="#example">Link</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </StoryFrame>
  );
};
