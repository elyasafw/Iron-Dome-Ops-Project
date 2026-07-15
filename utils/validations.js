function validateNewOperator(body) {
    const KEYS = ["name", "rank"];
    return Object.keys(body).every((key) => KEYS.includes(key));
}

function validateNewIncident(body) {
    const KEYS = ["codeName", "threatLevel", "operatorId"];
    return Object.keys(body).every((key) => KEYS.includes(key));
}

export { validateNewIncident, validateNewOperator };
