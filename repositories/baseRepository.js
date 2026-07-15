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
        const { columns, values, id } = data;
        const query = `
        UPDATE ${tableName}
        SET ${columns}
        WHERE id=?
        `;
        const updateData = await pool.execute(query, [...values, id]);
        return updateData.affectedRows;
    }
    return { createNew, updateData };
}

const ironRepo = repository();

export default ironRepo;
