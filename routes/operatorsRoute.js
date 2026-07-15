import express from "express";
import createNewOperator from "../controllers/operatorsController";

const operatorsRouter = express.Router();

operatorsRouter.post("/", async (req, res) => {
    try {
        await createNewOperator(req, res);
    } catch (error) {
        throw error;
    }
});

export default operatorsRouter;
