import pool from "../db/database.js";

async function ironRepo() {
    try {
        async function createNew(tableName, newData) {
            const { columns, values, placeholders } = newData;
            const query = `
                INSERT INTO ${tableName} (${columns})
                VALUES (${placeholders})
                `;
            const [newData] = await pool.execute(query, values);
            return newData;
        }
    } catch (error) {
        return error.message;
    }
}
