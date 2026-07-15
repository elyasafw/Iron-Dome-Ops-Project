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

export { extractNewBody };
