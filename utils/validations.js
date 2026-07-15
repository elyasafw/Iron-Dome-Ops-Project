function validateNewOperator(body) {
    const KEYS = ["name", "rank"];
    return Object.keys(body).every((key) => KEYS.includes(key));
}

export default validateNewOperator;
