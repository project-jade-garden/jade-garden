<script lang="ts">
import { Separator, Toolbar } from "bits-ui";
import Sparkle from "phosphor-svelte/lib/Sparkle";
import TextAlignCenter from "phosphor-svelte/lib/TextAlignCenter";
import TextAlignLeft from "phosphor-svelte/lib/TextAlignLeft";
import TextAlignRight from "phosphor-svelte/lib/TextAlignRight";
import TextB from "phosphor-svelte/lib/TextB";
import TextItalic from "phosphor-svelte/lib/TextItalic";
import TextStrikethrough from "phosphor-svelte/lib/TextStrikethrough";

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let text = $state(["bold"]);
// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let align = $state("");
</script>

<Toolbar.Root>
  <Toolbar.Group
    bind:value={text}
    type="multiple"
   
  >
    <Toolbar.GroupItem
      aria-label="toggle bold"
      value="bold"
     
    >
      <TextB />
    </Toolbar.GroupItem>
    <Toolbar.GroupItem
      aria-label="toggle italic"
      value="italic"
     
    >
      <TextItalic />
    </Toolbar.GroupItem>
    <Toolbar.GroupItem
      aria-label="toggle strikethrough"
      value="strikethrough"
     
    >
      <TextStrikethrough />
    </Toolbar.GroupItem>
  </Toolbar.Group>
 
  <Separator.Root />
 
  <Toolbar.Group
    bind:value={align}
    type="single"
   
  >
    <Toolbar.GroupItem
      aria-label="align left"
      value="left"
     
    >
      <TextAlignLeft />
    </Toolbar.GroupItem>
    <Toolbar.GroupItem
      aria-label="align center"
      value="center"
     
    >
      <TextAlignCenter />
    </Toolbar.GroupItem>
    <Toolbar.GroupItem
      aria-label="align right"
      value="right"
     
    >
      <TextAlignRight />
    </Toolbar.GroupItem>
  </Toolbar.Group>
 
  <Separator.Root />
 
  <div>
    <Toolbar.Button
     
    >
      <Sparkle />
      <span> Ask AI </span>
    </Toolbar.Button>
  </div>
</Toolbar.Root>