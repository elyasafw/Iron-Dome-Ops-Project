import express from "express";
import createNewOperator from "../controllers/operatorsController";

const operatorsRouter = express.Router();

operatorsRouter.post("/", async (req, res) => {
    try {
        await createNewOperator(req, res);
    } catch (err) {
        const error = new Error(err.message);
        error.status = 500;
        throw error;
    }
});

export default operatorsRouter;
