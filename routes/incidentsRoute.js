import express from "express";
import { createNewIncident } from "../controllers/incidentsController";

const incidentsRouter = express.Router();

incidentsRouter.post("/", (req, res) => {
    try {
        createNewIncident(req, res);
    } catch (err) {
        const error = new Error(err.message);
        error.status = 500;
        throw error;
    }
});

export default incidentsRouter;
