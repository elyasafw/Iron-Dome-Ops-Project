import pool from "../db/database.js";

function repository() {
    async function createNew(tableName, data) {
        const { columns, values, placeholders } = data;
        const query = `
            INSERT INTO ${tableName} (${columns})
            VALUES (${placeholders})
            `;
        const [newData] = await pool.execute(query, values);
        return newData;
    }
    async function updateData(tableName, data) {
        const { columns, values, id } = data;
        const query = `
            UPDATE ${tableName}
            SET ${columns}
            WHERE id=?
            `;
        const [updateData] = await pool.execute(query, [...values, id]);
    }
    async function selectFromTable(tableName, filter) {
        const { values, queryFilter } = filter;
        const query = `
        SELECT * FROM ${tableName} ${queryFilter}
        `;
        const [data] = await pool.execute(query, values);
        return data;
    }
    return { createNew, updateData, selectFromTable };
}

const ironRepo = repository();

export default ironRepo;
