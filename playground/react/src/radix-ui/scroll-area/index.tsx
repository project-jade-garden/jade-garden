import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as React from "react";

// biome-ignore lint/suspicious/noExplicitAny: It can be anything for props
const ScrollAreaStory = ({ children, animated = false, vertical = true, horizontal = true, ...props }: any) => (
  <ScrollArea.Root {...props} style={{ width: 200, height: 200, ...props.style }}>
    <ScrollArea.Viewport>{children}</ScrollArea.Viewport>
    {vertical && (
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    )}
    {horizontal && (
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    )}
    <ScrollArea.Corner />
  </ScrollArea.Root>
);

const Copy = ({ style = {} }: { style?: React.CSSProperties }) => (
  <p style={{ width: 4000, marginTop: 0, ...style }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet eros iaculis, bibendum tellus ac, lobortis
    odio. Aliquam bibendum elit est, in iaculis est commodo id. Donec pulvinar est libero. Proin consectetur
    pellentesque molestie. Fusce mi ante, ullamcorper eu ante finibus, finibus pellentesque turpis. Mauris convallis,
    leo in vulputate varius, sapien lectus suscipit eros, ac semper odio sapien sit amet magna. Sed mattis turpis et
    lacinia ultrices. Nulla a commodo mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Pellentesque id tempor metus. Pellentesque faucibus tortor non nisi maximus dignissim. Etiam leo
    nisi, molestie a porttitor at, euismod a libero. Nullam placerat tristique enim nec pulvinar. Sed eleifend dictum
    nulla a aliquam. Sed tempus ipsum eget urna posuere aliquam. Nulla maximus tortor dui, sed laoreet odio aliquet ac.
    Vestibulum dolor orci, lacinia finibus vehicula eget, posuere ac lectus. Quisque non felis at ipsum scelerisque
    condimentum. In pharetra semper arcu, ut hendrerit sem auctor vel. Aliquam non lacinia elit, a facilisis ante.
    Praesent eget eros augue. Praesent nunc orci, ullamcorper non pulvinar eu, elementum id nibh. Nam id lorem euismod,
    sodales augue quis, porttitor magna. Vivamus ut nisl velit. Nam ultrices maximus felis, quis ullamcorper quam luctus
    et.
  </p>
);

export const Basic = () => {
  // biome-ignore lint/suspicious/noExplicitAny: It can be anything for props
  const [props, setProps] = React.useState({} as any);
  return (
    <div>
      <div style={{ margin: "20px auto", width: "max-content", textAlign: "center" }}>
        <form
          onChange={(event) => {
            const formData = new FormData(event.currentTarget);
            const entries = formData.entries();
            const cleanup = [...entries].map(([key, value]) => [key, value || undefined]);
            const props = Object.fromEntries(cleanup);
            setProps(props);
          }}
        >
          <label htmlFor="">
            type:{" "}
            <select name="type">
              <option />
              <option>always</option>
              <option>auto</option>
              <option>scroll</option>
              <option>hover</option>
            </select>
          </label>{" "}
          <label htmlFor="">
            dir:{" "}
            <select name="dir">
              <option />
              <option>ltr</option>
              <option>rtl</option>
            </select>
          </label>{" "}
          <label htmlFor="">
            scrollHideDelay: <input type="number" name="scrollHideDelay" />
          </label>
        </form>
      </div>

      <ScrollAreaStory {...props} key={props.type} style={{ width: 800, height: 800, margin: "30px auto" }}>
        {Array.from({ length: 30 }).map((_, index) => (
          <Copy key={index} />
        ))}
      </ScrollAreaStory>
    </div>
  );
};
