import ironRepo from "../repositories/baseRepository.js";
import { extractNewBody } from "../services/ironServices.js";

const TABLE = "operators";

async function createNewOperator(req, res) {
    const queryParameters = extractNewBody(req.body);
    const newOperator = await ironRepo.createNew(TABLE, queryParameters);
    res.status(201).json({
        success: true,
        message: `New operator created successfully, ID: ${newOperator.insertId}`,
    });
}

export { createNewOperator };
