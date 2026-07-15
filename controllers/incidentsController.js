import { extractNewBody } from "../services/ironServices";
import { validateNewIncident } from "../utils/validations";

const TABLE = "incdents";

async function createNewIncident(req, res) {
    if (!validateNewIncident(req.body)) {
        const error = new Error(
            `The body of the request must contain the fields: codeName | threatLevel | operatorId`,
        );
        error.status = 400;
        throw error;
    }
    const queryParameters = extractNewBody(req.body);
    const newIncident = ironRepo.createNew(TABLE, queryParameters);
    res.status(201).json({ success: true, data: newIncident });
}

export { createNewIncident };
