import { CREATE_TABLE } from "../actions";

const initialState = {
  table: []
};

export default function createTable(state = initialState, action) {
  switch (action.type) {
    case CREATE_TABLE:
      return {
        ...state,
        table: [
          ...action.payload.table
        ]
      };
    default:
      return state;
  }
}