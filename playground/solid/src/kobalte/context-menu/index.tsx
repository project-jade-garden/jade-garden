import { ContextMenu } from "@kobalte/core/context-menu";
import { CheckIcon, ChevronRightIcon, Ellipsis } from "lucide-solid";
import { createSignal } from "solid-js";

export const Basic = () => {
  const [showGitLog, setShowGitLog] = createSignal(true);
  const [showHistory, setShowHistory] = createSignal(false);
  const [branch, setBranch] = createSignal("main");
  return (
    <ContextMenu>
      <ContextMenu.Trigger class="context-menu__trigger">Right click here.</ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content class="context-menu__content">
          <ContextMenu.Item class="context-menu__item">
            Commit <div class="context-menu__item-right-slot">⌘+K</div>
          </ContextMenu.Item>
          <ContextMenu.Item class="context-menu__item">
            Push <div class="context-menu__item-right-slot">⇧+⌘+K</div>
          </ContextMenu.Item>
          <ContextMenu.Item class="context-menu__item" disabled>
            Update Project <div class="context-menu__item-right-slot">⌘+T</div>
          </ContextMenu.Item>
          <ContextMenu.Sub overlap gutter={4} shift={-8}>
            <ContextMenu.SubTrigger class="context-menu__sub-trigger">
              GitHub
              <div class="context-menu__item-right-slot">
                <ChevronRightIcon width={20} height={20} />
              </div>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent class="context-menu__sub-content">
                <ContextMenu.Item class="context-menu__item">Create Pull Request…</ContextMenu.Item>
                <ContextMenu.Item class="context-menu__item">View Pull Requests</ContextMenu.Item>
                <ContextMenu.Item class="context-menu__item">Sync Fork</ContextMenu.Item>
                <ContextMenu.Separator class="context-menu__separator" />
                <ContextMenu.Item class="context-menu__item">Open on GitHub</ContextMenu.Item>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>
          <ContextMenu.Separator class="context-menu__separator" />
          <ContextMenu.CheckboxItem class="context-menu__checkbox-item" checked={showGitLog()} onChange={setShowGitLog}>
            <ContextMenu.ItemIndicator class="context-menu__item-indicator">
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Show Git Log
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem
            class="context-menu__checkbox-item"
            checked={showHistory()}
            onChange={setShowHistory}
          >
            <ContextMenu.ItemIndicator class="context-menu__item-indicator">
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Show History
          </ContextMenu.CheckboxItem>
          <ContextMenu.Separator class="context-menu__separator" />
          <ContextMenu.Group>
            <ContextMenu.GroupLabel class="context-menu__group-label">Branches</ContextMenu.GroupLabel>
            <ContextMenu.RadioGroup value={branch()} onChange={setBranch}>
              <ContextMenu.RadioItem class="context-menu__radio-item" value="main">
                <ContextMenu.ItemIndicator class="context-menu__item-indicator">
                  <Ellipsis />
                </ContextMenu.ItemIndicator>
                main
              </ContextMenu.RadioItem>
              <ContextMenu.RadioItem class="context-menu__radio-item" value="develop">
                <ContextMenu.ItemIndicator class="context-menu__item-indicator">
                  <Ellipsis />
                </ContextMenu.ItemIndicator>
                develop
              </ContextMenu.RadioItem>
            </ContextMenu.RadioGroup>
          </ContextMenu.Group>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu>
  );
};
