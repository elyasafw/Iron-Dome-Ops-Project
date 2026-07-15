import ironRepo from "../repositories/baseRepository";
import { extractNewBody, extractUpdateBody } from "../services/ironServices";
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
    req.body.status = "OPEN";
    const queryParameters = extractNewBody(req.body);
    const newIncident = await ironRepo.createNew(TABLE, queryParameters);
    res.status(201).json({ success: true, data: newIncident });
}

async function updateIncident(req, res) {
    const queryParameters = extractUpdateBody(req.body);
    const updateIncident = await ironRepo.updateData(TABLE, queryParameters);
    res.status(200).json({
        success: true,
        message: `Updated ${tableName} successfully. Rows affected: ${updateIncident}`,
    });
}

export { createNewIncident };
