export const CREATE_TABLE = "CREATE_TABLE";

export const createTable = (table) => ({
    type: CREATE_TABLE,
    payload:   { table }
})