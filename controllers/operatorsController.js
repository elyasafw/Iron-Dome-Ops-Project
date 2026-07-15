import ironRepo from "../repositories/baseRepository";
import { extractNewBody } from "../services/ironServices";
import { validateNewOperator } from "../utils/validations";

const TABLE = "operators";

async function createNewOperator(req, res) {
    if (!validateNewOperator(req.body)) {
        const error = new Error(
            `The body of the request must contain the fields: name | rank`,
        );
        error.status = 400;
        throw error;
    }
    const queryParameters = extractNewBody(req.body);
    const newOperator = await ironRepo.createNew(TABLE, queryParameters);
    res.status(201).json({ success: true, data: newOperator });
}

export { createNewOperator };
