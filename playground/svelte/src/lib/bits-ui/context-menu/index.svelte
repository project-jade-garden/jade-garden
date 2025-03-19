<script lang="ts">
import { ContextMenu } from "bits-ui";
import CopySimple from "phosphor-svelte/lib/CopySimple";
import MouseSimple from "phosphor-svelte/lib/MouseSimple";
import PencilSimpleLine from "phosphor-svelte/lib/PencilSimpleLine";
import PlusCircle from "phosphor-svelte/lib/PlusCircle";
import Trash from "phosphor-svelte/lib/Trash";
</script>

<ContextMenu.Root>
  <ContextMenu.Trigger>
    <div>
      <MouseSimple  />
      Right click me
    </div>
  </ContextMenu.Trigger>
  <ContextMenu.Portal>
    <ContextMenu.Content>
      <ContextMenu.Item>
        <div>
          <PencilSimpleLine />
          Edit
        </div>
        <div >
          <kbd>
            ⌘
          </kbd>
          <kbd>
            E
          </kbd>
        </div>
      </ContextMenu.Item>
      <ContextMenu.Sub>
        <ContextMenu.SubTrigger>
          <div >
            <PlusCircle  />
            Add
          </div>
          <div >
            <kbd>
              ⌘
            </kbd>
            <kbd>
              N
            </kbd>
          </div>
        </ContextMenu.SubTrigger>
        <ContextMenu.SubContent
          sideOffset={10}
        >
          <ContextMenu.Item>
            Header
          </ContextMenu.Item>
          <ContextMenu.Item>
            Paragraph
          </ContextMenu.Item>
          <ContextMenu.Item>
            Codeblock
          </ContextMenu.Item>
          <ContextMenu.Item>
            List
          </ContextMenu.Item>
          <ContextMenu.Item>
            Task
          </ContextMenu.Item>
        </ContextMenu.SubContent>
      </ContextMenu.Sub>
      <ContextMenu.Item>
        <div >
          <CopySimple />
          Duplicate
        </div>
        <div>
          <kbd>
            ⌘
          </kbd>
          <kbd>
            D
          </kbd>
        </div>
      </ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item>
        <div>
          <Trash />
          Delete
        </div>
      </ContextMenu.Item>
    </ContextMenu.Content>
  </ContextMenu.Portal>
</ContextMenu.Root>