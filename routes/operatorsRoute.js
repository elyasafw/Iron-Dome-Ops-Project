import express from "express";
import createNewOperator from "../controllers/operatorsController";
import { middleValidation, newOperatorSchema } from "../middleware/middlewares";

const operatorsRouter = express.Router();

operatorsRouter.post(
    "/",
    middleValidation(newOperatorSchema),
    async (req, res) => {
        try {
            await createNewOperator(req, res);
        } catch (error) {
            throw error;
        }
    },
);

export default operatorsRouter;
