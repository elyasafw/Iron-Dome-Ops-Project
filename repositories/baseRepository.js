import pool from "../db/database";

function repository() {
    async function createNew(tableName, newData) {
        const { columns, values, placeholders } = newData;
        const query = `
                INSERT INTO ${tableName} (${columns})
                VALUES (${placeholders})
                `;
        const [newData] = await pool.execute(query, values);
        return newData;
    }
    async function updateData(tableName, data) {
    }
    return { createNew };
}

const ironRepo = repository();

export default ironRepo;
