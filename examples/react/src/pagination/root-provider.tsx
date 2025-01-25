import { Pagination, usePagination } from "@ark-ui/react/pagination";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const RootProvider = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.pagination, park: park.pagination, shadcn: shadcn.pagination },
    theme
  );
  const pagination = usePagination({ count: 5000, pageSize: 10, siblingCount: 2 });

  return (
    <>
      <button type="button" onClick={() => pagination.goToNextPage()}>
        Next Page
      </button>

      <Pagination.RootProvider value={pagination}>
        <Pagination.PrevTrigger>Previous Page</Pagination.PrevTrigger>
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
      </Pagination.RootProvider>
    </>
  );
};
