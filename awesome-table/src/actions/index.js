export const CREATE_TABLE = "CREATE_TABLE";

export const createTable = (table, rows, cols) => ({
    type: CREATE_TABLE,
    payload:   { table, rows, cols }
})