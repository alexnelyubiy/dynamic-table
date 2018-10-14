import { createStructuredSelector } from "reselect";

export const modelSelector = createStructuredSelector({
  table: state => state.createTable.table,
  rows: state => state.createTable.rows,
  cols: state => state.createTable.cols
});