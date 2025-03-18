import * as Menubar from "@radix-ui/react-menubar";
import * as React from "react";

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

export const Basic = () => {
  const [loop, setLoop] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);
  const dir = rtl ? "rtl" : "ltr";
  const checkOptions = ["Always Show Bookmarks Bar", "Always Show Toolbar in Fullscreen", "Always Show Full URLs"];
  const [checkedSelection, setCheckedSelection] = React.useState<string[]>([checkOptions[1]]);

  const radioOptions = ["Andy", "Benoît", "Colm", "Jenna", "Pedro"];
  const [radioSelection, setRadioSelection] = React.useState(radioOptions[1]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: 50
      }}
    >
      <div style={{ display: "flex", gap: 25, marginBottom: 20 }}>
        <label htmlFor="">
          <input type="checkbox" checked={rtl} onChange={(event) => setRtl(event.currentTarget.checked)} />
          Right-to-left
        </label>

        <label htmlFor="">
          <input type="checkbox" checked={loop} onChange={(event) => setLoop(event.currentTarget.checked)} />
          Loop
        </label>
      </div>

      <div dir={dir}>
        <Menubar.Root>
          <Menubar.Menu>
            <Menubar.Trigger>File</Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content>
                <Menubar.Item>New Tab</Menubar.Item>
                <Menubar.Item>New Window</Menubar.Item>
                <Menubar.Item>New Incognito Window</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Sub>
                  <Menubar.SubTrigger>
                    Share <span>→</span>
                  </Menubar.SubTrigger>
                  <Menubar.Portal>
                    <Menubar.SubContent>
                      <Menubar.Item>Email Link</Menubar.Item>
                      <Menubar.Item>Messages</Menubar.Item>
                      <Menubar.Item>Airdrop</Menubar.Item>
                    </Menubar.SubContent>
                  </Menubar.Portal>
                </Menubar.Sub>
                <Menubar.Separator />
                <Menubar.Item>Print…</Menubar.Item>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>

          <Menubar.Menu>
            <Menubar.Trigger>Edit</Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content>
                <Menubar.Item>Undo</Menubar.Item>
                <Menubar.Item>Redo</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Sub>
                  <Menubar.SubTrigger>
                    Find <span>→</span>
                  </Menubar.SubTrigger>

                  <Menubar.Portal>
                    <Menubar.SubContent>
                      <Menubar.Item>Search the web…</Menubar.Item>
                      <Menubar.Separator />
                      <Menubar.Item>Find…</Menubar.Item>
                      <Menubar.Item>Find Next</Menubar.Item>
                      <Menubar.Item>Find Previous</Menubar.Item>
                      <Menubar.Sub>
                        <Menubar.SubTrigger>
                          Advanced <span>→</span>
                        </Menubar.SubTrigger>

                        <Menubar.Portal>
                          <Menubar.SubContent>
                            <Menubar.Item>Regex</Menubar.Item>
                            <Menubar.Item>Replace</Menubar.Item>
                          </Menubar.SubContent>
                        </Menubar.Portal>
                      </Menubar.Sub>
                    </Menubar.SubContent>
                  </Menubar.Portal>
                </Menubar.Sub>
                <Menubar.Separator />
                <Menubar.Item>Cut</Menubar.Item>
                <Menubar.Item>Copy</Menubar.Item>
                <Menubar.Item>Paste</Menubar.Item>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>

          <Menubar.Menu>
            <Menubar.Trigger>View</Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content>
                {checkOptions.map((option) => (
                  <Menubar.CheckboxItem
                    key={option}
                    checked={checkedSelection.includes(option)}
                    onCheckedChange={() =>
                      setCheckedSelection((current) =>
                        current.includes(option) ? current.filter((el) => el !== option) : current.concat(option)
                      )
                    }
                  >
                    {option}
                    <Menubar.ItemIndicator style={{ marginLeft: 10 }}>
                      <TickIcon />
                    </Menubar.ItemIndicator>
                  </Menubar.CheckboxItem>
                ))}
                <Menubar.Separator />
                <Menubar.Item>Reload</Menubar.Item>
                <Menubar.Item>Force Reload</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item>Toggle Fullscreen</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item>Hide Sidebar</Menubar.Item>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>

          <Menubar.Menu>
            <Menubar.Trigger>Profiles</Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content>
                <Menubar.RadioGroup value={radioSelection} onValueChange={setRadioSelection}>
                  {radioOptions.map((option) => (
                    <Menubar.RadioItem key={option} value="">
                      {option}
                      <Menubar.ItemIndicator style={{ marginLeft: 10 }}>
                        <TickIcon />
                      </Menubar.ItemIndicator>
                    </Menubar.RadioItem>
                  ))}
                </Menubar.RadioGroup>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>

          <Menubar.Menu>
            <Menubar.Trigger>History</Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content>
                <Menubar.Label>Work</Menubar.Label>
                <Menubar.Item>Radix</Menubar.Item>
                <Menubar.Item>Github</Menubar.Item>
                <Menubar.Item>WorkOS</Menubar.Item>
                <Menubar.Label>Community</Menubar.Label>
                <Menubar.Item>Twitter</Menubar.Item>
                <Menubar.Item>Discord</Menubar.Item>
                <Menubar.Item>Slack</Menubar.Item>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>
        </Menubar.Root>
      </div>
    </div>
  );
};
