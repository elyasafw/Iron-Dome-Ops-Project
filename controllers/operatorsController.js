import ironRepo from "../repositories/baseRepository";
import extractBody from "../services/ironServices";

const TABLE = "operators";

async function createNewOperator(req, res) {
    const queryParameters = extractBody(req.body);
    const newData = ironRepo(TABLE, queryParameters);
    res.status(201).json({ success: true, data: newData });
}

export default createNewOperator;
