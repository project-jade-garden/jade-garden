<script lang="ts">
import { DateRangeField } from "bits-ui";
</script>

<DateRangeField.Root>
  <DateRangeField.Label>
    Hotel dates
  </DateRangeField.Label>
  <div>
    {#each ["start", "end"] as const as type}
      <DateRangeField.Input {type}>
        {#snippet children({ segments })}
          {#each segments as { part, value }}
            <div >
              {#if part === "literal"}
                <DateRangeField.Segment {part}>
                  {value}
                </DateRangeField.Segment>
              {:else}
                <DateRangeField.Segment {part}>
                  {value}
                </DateRangeField.Segment>
              {/if}
            </div>
          {/each}
        {/snippet}
      </DateRangeField.Input>
      {#if type === "start"}
        <div aria-hidden="true">–⁠⁠⁠⁠⁠</div>
      {/if}
    {/each}
  </div>
</DateRangeField.Root>