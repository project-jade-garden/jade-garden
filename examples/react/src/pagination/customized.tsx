import { Pagination } from "@ark-ui/react/pagination";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Customized = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.pagination, park: park.pagination, shadcn: shadcn.pagination },
    theme
  );

  return (
    <Pagination.Root
      count={5000}
      pageSize={20}
      siblingCount={3}
      translations={{
        nextTriggerLabel: "Next",
        prevTriggerLabel: "Prev",
        itemLabel: (details) => `Page ${details.page}`
      }}
    >
      <Pagination.PrevTrigger>Previous</Pagination.PrevTrigger>
      <Pagination.Context>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === "page" ? (
              <Pagination.Item key={index} {...page}>
                {page.value}
              </Pagination.Item>
            ) : (
              <Pagination.Ellipsis key={index} index={index}>
                &#8230;
              </Pagination.Ellipsis>
            )
          )
        }
      </Pagination.Context>
      <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
    </Pagination.Root>
  );
};
