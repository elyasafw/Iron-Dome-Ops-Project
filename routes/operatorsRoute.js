import express from "express";
import { createNewOperator } from "../controllers/operatorsController.js";
import {
    middleValidation,
    newOperatorSchema,
} from "../middleware/middlewares.js";

const operatorsRouter = express.Router();

operatorsRouter.post(
    "/",
    middleValidation(newOperatorSchema),
    async (req, res) => {
        try {
            const operator = await createNewOperator(req, res);
            res.status(201).json({
                success: true,
                message: `New operator created successfully, ID: ${operator.insertId}`,
            });
        } catch (error) {
            throw error;
        }
    },
);

export default operatorsRouter;
