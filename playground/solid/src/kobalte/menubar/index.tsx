import { Menubar } from "@kobalte/core/menubar";
import { CheckIcon, ChevronRightIcon, Ellipsis } from "lucide-solid";
import { createSignal } from "solid-js";

export const Basic = () => {
  const [showGitLog, setShowGitLog] = createSignal(true);
  const [showHistory, setShowHistory] = createSignal(false);
  const [branch, setBranch] = createSignal("main");
  return (
    <Menubar class="menubar__root">
      <Menubar.Menu>
        <Menubar.Trigger class="menubar__trigger">Git</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content class="menubar__content">
            <Menubar.Item class="menubar__item">
              Commit <div class="menubar__item-right-slot">⌘+K</div>
            </Menubar.Item>
            <Menubar.Item class="menubar__item">
              Push <div class="menubar__item-right-slot">⇧+⌘+K</div>
            </Menubar.Item>
            <Menubar.Item class="menubar__item" disabled>
              Update Project <div class="menubar__item-right-slot">⌘+T</div>
            </Menubar.Item>
            <Menubar.Sub overlap gutter={4} shift={-8}>
              <Menubar.SubTrigger class="menubar__sub-trigger">
                GitHub
                <div class="menubar__item-right-slot">
                  <ChevronRightIcon width={20} height={20} />
                </div>
              </Menubar.SubTrigger>
              <Menubar.Portal>
                <Menubar.SubContent class="menubar__sub-content">
                  <Menubar.Item class="menubar__item">Create Pull Request…</Menubar.Item>
                  <Menubar.Item class="menubar__item">View Pull Requests</Menubar.Item>
                  <Menubar.Item class="menubar__item">Sync Fork</Menubar.Item>
                  <Menubar.Separator class="menubar__separator" />
                  <Menubar.Item class="menubar__item">Open on GitHub</Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator class="menubar__separator" />
            <Menubar.CheckboxItem class="menubar__checkbox-item" checked={showGitLog()} onChange={setShowGitLog}>
              <Menubar.ItemIndicator class="menubar__item-indicator">
                <CheckIcon />
              </Menubar.ItemIndicator>
              Show Git Log
            </Menubar.CheckboxItem>
            <Menubar.CheckboxItem class="menubar__checkbox-item" checked={showHistory()} onChange={setShowHistory}>
              <Menubar.ItemIndicator class="menubar__item-indicator">
                <CheckIcon />
              </Menubar.ItemIndicator>
              Show History
            </Menubar.CheckboxItem>
            <Menubar.Separator class="menubar__separator" />
            <Menubar.Group>
              <Menubar.GroupLabel class="menubar__group-label">Branches</Menubar.GroupLabel>
              <Menubar.RadioGroup value={branch()} onChange={setBranch}>
                <Menubar.RadioItem class="menubar__radio-item" value="main">
                  <Menubar.ItemIndicator class="menubar__item-indicator">
                    <Ellipsis />
                  </Menubar.ItemIndicator>
                  main
                </Menubar.RadioItem>
                <Menubar.RadioItem class="menubar__radio-item" value="develop">
                  <Menubar.ItemIndicator class="menubar__item-indicator">
                    <Ellipsis />
                  </Menubar.ItemIndicator>
                  develop
                </Menubar.RadioItem>
              </Menubar.RadioGroup>
            </Menubar.Group>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class="menubar__trigger">File</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content class="menubar__content">
            <Menubar.Item class="menubar__item">
              New Tab <div class="menubar__item-right-slot">⌘+T</div>
            </Menubar.Item>
            <Menubar.Item class="menubar__item">
              New Window <div class="menubar__item-right-slot">⌘+N</div>
            </Menubar.Item>
            <Menubar.Item class="menubar__item" disabled>
              New Incognito Window
            </Menubar.Item>
            <Menubar.Separator class="menubar__separator" />
            <Menubar.Sub overlap gutter={4} shift={-8}>
              <Menubar.SubTrigger class="menubar__sub-trigger">
                Share
                <div class="menubar__item-right-slot">
                  <ChevronRightIcon width={20} height={20} />
                </div>
              </Menubar.SubTrigger>
              <Menubar.Portal>
                <Menubar.SubContent class="menubar__sub-content">
                  <Menubar.Item class="menubar__item">Email Link</Menubar.Item>
                  <Menubar.Item class="menubar__item">Messages</Menubar.Item>
                  <Menubar.Item class="menubar__item">Notes</Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator class="menubar__separator" />
            <Menubar.Item class="menubar__item">
              Print... <div class="menubar__item-right-slot">⌘+P</div>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class="menubar__trigger">Edit</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content class="menubar__content">
            <Menubar.Item class="menubar__item">
              Undo <div class="menubar__item-right-slot">⌘+Z</div>
            </Menubar.Item>
            <Menubar.Item class="menubar__item">
              Redo <div class="menubar__item-right-slot">⇧+⌘+Z</div>
            </Menubar.Item>
            <Menubar.Separator class="menubar__separator" />
            <Menubar.Sub overlap gutter={4} shift={-8}>
              <Menubar.SubTrigger class="menubar__sub-trigger">
                Find
                <div class="menubar__item-right-slot">
                  <ChevronRightIcon width={20} height={20} />
                </div>
              </Menubar.SubTrigger>
              <Menubar.Portal>
                <Menubar.SubContent class="menubar__sub-content">
                  <Menubar.Item class="menubar__item">Search The Web</Menubar.Item>
                  <Menubar.Separator class="menubar__separator" />
                  <Menubar.Item class="menubar__item">Find...</Menubar.Item>
                  <Menubar.Item class="menubar__item">Find Next</Menubar.Item>
                  <Menubar.Item class="menubar__item">Find Previous</Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator class="menubar__separator" />
            <Menubar.Item class="menubar__item">Cut</Menubar.Item>
            <Menubar.Item class="menubar__item">Copy</Menubar.Item>
            <Menubar.Item class="menubar__item">Paste</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar>
  );
};
