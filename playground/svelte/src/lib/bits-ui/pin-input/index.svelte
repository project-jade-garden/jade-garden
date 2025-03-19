<script lang="ts">
import { PinInput, type PinInputRootSnippetProps, REGEXP_ONLY_DIGITS } from "bits-ui";
import cn from "clsx";

let value = $state("");

type CellProps = PinInputRootSnippetProps["cells"][0];

function onComplete() {
  value = "";
}
</script>

<PinInput.Root
  bind:value
 
  maxlength={6}
  {onComplete}
  pattern={REGEXP_ONLY_DIGITS}
>
  {#snippet children({ cells })}
    <div>
      {#each cells.slice(0, 3) as cell}
        {@render Cell(cell)}
      {/each}
    </div>
 
    <div>
      <div></div>
    </div>
 
    <div>
      {#each cells.slice(3, 6) as cell}
        {@render Cell(cell)}
      {/each}
    </div>
  {/snippet}
</PinInput.Root>
 
{#snippet Cell(cell: CellProps)}
  <PinInput.Cell
    {cell}
    class={cn(
      // Custom class to override global focus styles
      "focus-override",
      "relative h-14 w-10 text-[2rem]",
      "flex items-center justify-center",
      "transition-all duration-75",
      "border-foreground/20 border-y border-r first:rounded-l-md first:border-l last:rounded-r-md",
      "text-foreground group-focus-within/pininput:border-foreground/40 group-hover/pininput:border-foreground/40",
      "outline-0",
      "data-active:outline-1 data-active:outline-white"
    )}
  >
    {#if cell.char !== null}
      <div>
        {cell.char}
      </div>
    {/if}
    {#if cell.hasFakeCaret}
      <div>
        <div></div>
      </div>
    {/if}
  </PinInput.Cell>
{/snippet}