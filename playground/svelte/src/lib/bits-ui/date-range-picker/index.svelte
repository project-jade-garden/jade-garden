<script lang="ts">
import { DateRangePicker } from "bits-ui";
import CalendarBlank from "phosphor-svelte/lib/CalendarBlank";
import CaretLeft from "phosphor-svelte/lib/CaretLeft";
import CaretRight from "phosphor-svelte/lib/CaretRight";
</script>

<DateRangePicker.Root
  weekdayFormat="short"
  fixedWeeks={true}
>
  <DateRangePicker.Label>Rental Days</DateRangePicker.Label
  >
  <div>
    {#each ["start", "end"] as const as type}
      <DateRangePicker.Input {type}>
        {#snippet children({ segments })}
          {#each segments as { part, value }}
            <div >
              {#if part === "literal"}
                <DateRangePicker.Segment {part}>
                  {value}
                </DateRangePicker.Segment>
              {:else}
                <DateRangePicker.Segment {part}>
                  {value}
                </DateRangePicker.Segment>
              {/if}
            </div>
          {/each}
        {/snippet}
      </DateRangePicker.Input>
      {#if type === "start"}
        <div aria-hidden="true" >–⁠⁠⁠⁠⁠</div>
      {/if}
    {/each}

    <DateRangePicker.Trigger>
      <CalendarBlank  />
    </DateRangePicker.Trigger>
  </div>
  <DateRangePicker.Content sideOffset={6} >
    <DateRangePicker.Calendar>
      {#snippet children({ months, weekdays })}
        <DateRangePicker.Header >
          <DateRangePicker.PrevButton>
            <CaretLeft  />
          </DateRangePicker.PrevButton>
          <DateRangePicker.Heading  />
          <DateRangePicker.NextButton>
            <CaretRight  />
          </DateRangePicker.NextButton>
        </DateRangePicker.Header>
        <div>
          {#each months as month}
            <DateRangePicker.Grid>
              <DateRangePicker.GridHead>
                <DateRangePicker.GridRow>
                  {#each weekdays as day}
                    <DateRangePicker.HeadCell>
                      <div>{day.slice(0, 2)}</div>
                    </DateRangePicker.HeadCell>
                  {/each}
                </DateRangePicker.GridRow>
              </DateRangePicker.GridHead>
              <DateRangePicker.GridBody>
                {#each month.weeks as weekDates}
                  <DateRangePicker.GridRow >
                    {#each weekDates as date}
                      <DateRangePicker.Cell {date} month={month.value}>
                        <DateRangePicker.Day>
                          <div></div>
                          {date.day}
                        </DateRangePicker.Day>
                      </DateRangePicker.Cell>
                    {/each}
                  </DateRangePicker.GridRow>
                {/each}
              </DateRangePicker.GridBody>
            </DateRangePicker.Grid>
          {/each}
        </div>
      {/snippet}
    </DateRangePicker.Calendar>
  </DateRangePicker.Content>
</DateRangePicker.Root>