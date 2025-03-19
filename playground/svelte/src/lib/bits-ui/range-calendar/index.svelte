<script lang="ts">
// biome-ignore lint/style/useImportType: biome sometimes fails in svelte
import { RangeCalendar } from "bits-ui";
import cn from "clsx";
import CaretLeft from "phosphor-svelte/lib/CaretLeft";
import CaretRight from "phosphor-svelte/lib/CaretRight";
import type { ComponentProps } from "svelte";

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let { value = $bindable() }: ComponentProps<typeof RangeCalendar.Root> = $props();
</script>

<RangeCalendar.Root
 
  weekdayFormat="short"
  fixedWeeks={true}
  bind:value
>
  {#snippet children({ months, weekdays })}
    <RangeCalendar.Header>
      <RangeCalendar.PrevButton>
        <CaretLeft />
      </RangeCalendar.PrevButton>
      <RangeCalendar.Heading />
      <RangeCalendar.NextButton>
        <CaretRight />
      </RangeCalendar.NextButton>
    </RangeCalendar.Header>
    <div
     
    >
      {#each months as month}
        <RangeCalendar.Grid
         
        >
          <RangeCalendar.GridHead>
            <RangeCalendar.GridRow>
              {#each weekdays as day}
                <RangeCalendar.HeadCell
                 
                >
                  <div>{day.slice(0, 2)}</div>
                </RangeCalendar.HeadCell>
              {/each}
            </RangeCalendar.GridRow>
          </RangeCalendar.GridHead>
          <RangeCalendar.GridBody>
            {#each month.weeks as weekDates}
              <RangeCalendar.GridRow>
                {#each weekDates as date}
                  <RangeCalendar.Cell
                    {date}
                    month={month.value}
                   
                  >
                    <RangeCalendar.Day
                      class={cn(
                        "rounded-9px text-foreground hover:border-foreground focus-visible:ring-foreground! data-selection-end:rounded-9px data-selection-start:rounded-9px data-highlighted:bg-muted data-selected:bg-muted data-selection-end:bg-foreground data-selection-start:bg-foreground data-disabled:text-foreground/30 data-selected:text-foreground data-selection-end:text-background data-selection-start:text-background data-unavailable:text-muted-foreground data-selected:[&:not([data-selection-start])]:[&:not([data-selection-end])]:focus-visible:border-foreground data-disabled:pointer-events-none data-outside-month:pointer-events-none data-highlighted:rounded-none data-selected:font-medium data-selection-end:font-medium data-selection-start:font-medium data-unavailable:line-through data-selection-start:focus-visible:ring-2 data-selection-start:focus-visible:ring-offset-2! data-selected:[&:not([data-selection-start])]:[&:not([data-selection-end])]:rounded-none data-selected:[&:not([data-selection-start])]:[&:not([data-selection-end])]:focus-visible:ring-0! data-selected:[&:not([data-selection-start])]:[&:not([data-selection-end])]:focus-visible:ring-offset-0! group relative inline-flex size-10 items-center justify-center overflow-visible whitespace-nowrap border border-transparent bg-transparent p-0 text-sm font-normal"
                      )}
                    >
                      <div
                       
                      ></div>
                      {date.day}
                    </RangeCalendar.Day>
                  </RangeCalendar.Cell>
                {/each}
              </RangeCalendar.GridRow>
            {/each}
          </RangeCalendar.GridBody>
        </RangeCalendar.Grid>
      {/each}
    </div>
  {/snippet}
</RangeCalendar.Root>