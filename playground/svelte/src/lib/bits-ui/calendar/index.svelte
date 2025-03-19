<script lang="ts">
import { getLocalTimeZone, today } from "@internationalized/date";
// biome-ignore lint/style/useImportType: biome sometimes fails in svelte
import { Calendar } from "bits-ui";
import CaretLeft from "phosphor-svelte/lib/CaretLeft";
import CaretRight from "phosphor-svelte/lib/CaretRight";

const isDateUnavailable: Calendar.RootProps["isDateUnavailable"] = (date) => {
  return date.day === 17 || date.day === 18;
};

// biome-ignore lint/style/useConst: biome sometimes fails in svelte
let value = $state(today(getLocalTimeZone()));
</script>

<Calendar.Root
  {isDateUnavailable}
  weekdayFormat="short"
  fixedWeeks={true}
  type="single"
  bind:value
>
  {#snippet children({ months, weekdays })}
    <Calendar.Header >
      <Calendar.PrevButton>
        <CaretLeft  />
      </Calendar.PrevButton>
      <Calendar.Heading  />
      <Calendar.NextButton>
        <CaretRight  />
      </Calendar.NextButton>
    </Calendar.Header>
    <div>
      {#each months as month, i (i)}
        <Calendar.Grid >
          <Calendar.GridHead>
            <Calendar.GridRow >
              {#each weekdays as day}
                <Calendar.HeadCell>
                  <div>{day.slice(0, 2)}</div>
                </Calendar.HeadCell>
              {/each}
            </Calendar.GridRow>
          </Calendar.GridHead>
          <Calendar.GridBody>
            {#each month.weeks as weekDates}
              <Calendar.GridRow >
                {#each weekDates as date}
                  <Calendar.Cell
                    {date}
                    month={month.value}
                  >
                    <Calendar.Day>
                      <div></div>
                      {date.day}
                    </Calendar.Day>
                  </Calendar.Cell>
                {/each}
              </Calendar.GridRow>
            {/each}
          </Calendar.GridBody>
        </Calendar.Grid>
      {/each}
    </div>
  {/snippet}
</Calendar.Root>