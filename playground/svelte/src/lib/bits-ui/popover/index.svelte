<script lang="ts">
import { Popover, Separator, Toggle } from "bits-ui";
import ImageSquare from "phosphor-svelte/lib/ImageSquare";
import LinkSimpleHorizontalBreak from "phosphor-svelte/lib/LinkSimpleHorizontalBreak";

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let width = $state(1024);
// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let height = $state(768);
</script>
 
<Popover.Root>
  <Popover.Trigger
    class="rounded-input bg-dark
	text-background shadow-mini hover:bg-dark/95 inline-flex h-10 select-none items-center justify-center whitespace-nowrap px-[21px] text-[15px] font-medium transition-all hover:cursor-pointer active:scale-[0.98]"
  >
    Resize
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content
     
      sideOffset={8}
    >
      <div>
        <div
         
        >
          <ImageSquare />
        </div>
        <div>
          <h4>
            Resize image
          </h4>
          <p>
            Resize your photos easily
          </p>
        </div>
      </div>
      <Separator.Root />
      <div>
        <div>
          <div>
            <span>Width</span>
            <span
              aria-hidden="true"
             
              >W</span
            >
            <input
              type="number"
             
              bind:value={width}
            />
          </div>
          <div>
            <span>Height</span>
            <span
              aria-hidden="true"
             
              >H</span
            >
            <input
              type="number"
             
              bind:value={height}
            />
          </div>
        </div>
        <Toggle.Root
          aria-label="toggle constrain portions"
         
        >
          <LinkSimpleHorizontalBreak />
        </Toggle.Root>
      </div>
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>