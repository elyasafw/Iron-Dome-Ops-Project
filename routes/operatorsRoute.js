import express from "express";
import createNewOperator from "../controllers/operatorsController";

const operatorsRouter = express.Router();

operatorsRouter.post("/", (req, res) => {
    try {
        createNewOperator(req, res);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default operatorsRouter;
