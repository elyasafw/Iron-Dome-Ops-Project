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

function extractUpdateBody(bodyData, idFromParams) {
    const columns = Object.keys(bodyData)
        .map((key) => `${key}=?`)
        .join(", ");
    const values = Object.values(bodyData);
    return {
        columns,
        values,
        id: Number(idFromParams),
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

function buildUpdateLog(details) {
    const { incident_id, operator_id, status } = details;
    return {
        action: "STATUS_UPDATE",
        incident_id,
        operator_id,
        description: `Status changed to ${status}`,
    };
}

export {
    buildUpdateLog,
    extractFilters,
    extractNewBody,
    extractUpdateBody
};

