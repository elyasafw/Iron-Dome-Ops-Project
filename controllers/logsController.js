import ironRepo from "../repositories/baseRepository.js";
import { buildNewLog, extractNewBody } from "../services/ironServices.js";

const TABLE = "logs";

async function createNewLog(req, res, newId) {
    const details = { incident_id: newId, operator_id: req.body.operator_id };
    const logBody = buildNewLog(details);
    const queryParameters = extractNewBody(logBody);
    const newLog = await ironRepo.createNew(TABLE, queryParameters);
    console.log(`New log for new incident created, ID: ${newLog.insertId}`);
}

export { createNewLog };
