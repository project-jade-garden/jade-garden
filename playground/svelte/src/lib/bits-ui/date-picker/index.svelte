<script lang="ts">
import { DatePicker } from "bits-ui";
import CalendarBlank from "phosphor-svelte/lib/CalendarBlank";
import CaretLeft from "phosphor-svelte/lib/CaretLeft";
import CaretRight from "phosphor-svelte/lib/CaretRight";
</script>

<DatePicker.Root weekdayFormat="short" fixedWeeks={true}>
  <div >
    <DatePicker.Label>Birthday</DatePicker.Label
    >
    <DatePicker.Input>
      {#snippet children({ segments })}
        {#each segments as { part, value }}
          <div >
            {#if part === "literal"}
              <DatePicker.Segment {part} >
                {value}
              </DatePicker.Segment>
            {:else}
              <DatePicker.Segment {part}>
                {value}
              </DatePicker.Segment>
            {/if}
          </div>
        {/each}
        <DatePicker.Trigger>
          <CalendarBlank />
        </DatePicker.Trigger>
      {/snippet}
    </DatePicker.Input>
    <DatePicker.Content sideOffset={6} >
      <DatePicker.Calendar>
        {#snippet children({ months, weekdays })}
          <DatePicker.Header >
            <DatePicker.PrevButton>
              <CaretLeft  />
            </DatePicker.PrevButton>
            <DatePicker.Heading  />
            <DatePicker.NextButton>
              <CaretRight  />
            </DatePicker.NextButton>
          </DatePicker.Header>
          <div>
            {#each months as month}
              <DatePicker.Grid>
                <DatePicker.GridHead>
                  <DatePicker.GridRow >
                    {#each weekdays as day}
                      <DatePicker.HeadCell>
                        <div>{day.slice(0, 2)}</div>
                      </DatePicker.HeadCell>
                    {/each}
                  </DatePicker.GridRow>
                </DatePicker.GridHead>
                <DatePicker.GridBody>
                  {#each month.weeks as weekDates}
                    <DatePicker.GridRow >
                      {#each weekDates as date}
                        <DatePicker.Cell
                          {date}
                          month={month.value}
                        >
                          <DatePicker.Day>
                            <div></div>
                            {date.day}
                          </DatePicker.Day>
                        </DatePicker.Cell>
                      {/each}
                    </DatePicker.GridRow>
                  {/each}
                </DatePicker.GridBody>
              </DatePicker.Grid>
            {/each}
          </div>
        {/snippet}
      </DatePicker.Calendar>
    </DatePicker.Content>
  </div>
</DatePicker.Root>