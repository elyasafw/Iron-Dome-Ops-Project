import ironRepo from "../repositories/baseRepository";
import extractBody from "../services/ironServices";
import validateNewOperator from "../utils/validations";

const TABLE = "operators";

async function createNewOperator(req, res) {
    if (!validateNewOperator(req.body)) {
        return res.status(400).json({
            success: false,
            message: `The body of the request must contain the fields: name, rank.`,
        });
    }
    const queryParameters = extractBody(req.body);
    const newData = ironRepo.createNew(TABLE, queryParameters);
    res.status(201).json({ success: true, data: newData });
}

export default createNewOperator;
