import { Pagination } from "@kobalte/core/pagination";

export const Basic = () => {
  return (
    <Pagination
      class="pagination__root"
      count={10}
      itemComponent={(props) => (
        <Pagination.Item class="pagination__item" page={props.page}>
          {props.page}
        </Pagination.Item>
      )}
      ellipsisComponent={() => <Pagination.Ellipsis class="pagination__ellipsis">...</Pagination.Ellipsis>}
    >
      <Pagination.Previous class="pagination__item">Previous</Pagination.Previous>
      <Pagination.Items />
      <Pagination.Next class="pagination__item">Next</Pagination.Next>
    </Pagination>
  );
};
