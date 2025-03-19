<script lang="ts">
import { Pagination } from "bits-ui";
import CaretLeft from "phosphor-svelte/lib/CaretLeft";
import CaretRight from "phosphor-svelte/lib/CaretRight";
</script>

<Pagination.Root count={100} perPage={10}>
  {#snippet children({ pages, range })}
    <div>
      <Pagination.PrevButton>
        <CaretLeft />
      </Pagination.PrevButton>
      <div>
        {#each pages as page (page.key)}
          {#if page.type === "ellipsis"}
            <div
             
            >
              ...
            </div>
          {:else}
            <Pagination.Page
              {page}
             
            >
              {page.value}
            </Pagination.Page>
          {/if}
        {/each}
      </div>
      <Pagination.NextButton>
        <CaretRight />
      </Pagination.NextButton>
    </div>
    <p>
      Showing {range.start} - {range.end}
    </p>
  {/snippet}
</Pagination.Root>