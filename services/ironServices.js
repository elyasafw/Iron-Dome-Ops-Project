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

function extractUpdateBody(body) {
    const { id, ...cleanBody } = body;
    const columns = Object.keys(cleanBody)
        .map((key) => `${key}=?`)
        .join(", ");
    const values = Object.values(cleanBody);
    return {
        columns,
        values,
        id,
    };
}

export { extractNewBody, extractUpdateBody };
