function extractNewBody(body) {
    const columns = Object.keys(body).join(", ");
    const values = Object.values(body);
    const placeholders = Array(values.length).fill("?").join(", ");
    return {
        columns,
        values,
        placeholders,
    };
}

function extractUpdateBody(req) {
    const id = req.params.id;
    const columns = Object.keys(req.body)
        .map((key) => `${key}=?`)
        .join(", ");
    const values = Object.values(req.body);
    return {
        columns,
        values,
        id,
    };
}

function querySelectIncidents() {
    const query = `
        SELECT * FROM incidents
        WHERE status="OPEN"`;
    return query;
}

export { extractNewBody, extractUpdateBody, querySelectIncidents };
