import { CREATE_TABLE } from "../actions";

const initialState = {
  table: [],
  rows: null,
  cols: null
};

export default function createTable(state = initialState, action) {
  switch (action.type) {
    case CREATE_TABLE:
      return {
        ...state,
        table: [
          ...action.payload.table
        ],
        rows: action.payload.rows,
        cols: action.payload.cols
      };
    default:
      return state;
  }
}