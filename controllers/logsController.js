import ironRepo from "../repositories/baseRepository.js";
import { extractUpdateBody, extractNewBody } from "../services/ironServices.js";

const TABLE = "logs";

async function createNewLog(req, res, details) {
    const queryParameters = extractNewBody(details);
    const newLog = await ironRepo.createNew(TABLE, queryParameters);
    console.log(`New log for new incident created, ID: ${newLog.insertId}`);
}

export { createNewLog };
