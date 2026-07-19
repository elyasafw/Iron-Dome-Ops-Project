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

function extractFilters(filters) {
    const filter = filters
        ? Object.keys(filters)
              .map((key) => `${key}=?`)
              .join(" AND ")
        : undefined;
    const values = Object.values(filters);
    const queryFilter = filters ? `WHERE ${filter}` : undefined;
    return {
        values,
        queryFilter,
    };
}

function buildNewLog(details) {
    const { incident_id, operator_id } = details;
    return {
        action: "INCIDENT_CREATED",
        incident_id,
        operator_id,
        description: "New incident created",
    };
}

export { buildNewLog, extractFilters, extractNewBody, extractUpdateBody };
