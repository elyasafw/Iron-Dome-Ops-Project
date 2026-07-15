import express from "express";
import {
    createNewIncident,
    updateIncident,
} from "../controllers/incidentsController";
import { validateStatus } from "../middleware/middlewares";

const incidentsRouter = express.Router();

incidentsRouter.post("/", async (req, res) => {
    try {
        await createNewIncident(req, res);
    } catch (err) {
        const error = new Error(err.message);
        error.status = 500;
        throw error;
    }
});

incidentsRouter.patch("/:id/status", validateStatus, async (req, res) => {
    try {
        await updateIncident(req, res);
    } catch (error) {
        throw error
    }
});

export default incidentsRouter;
