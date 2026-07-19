import express from "express";
import {
    createNewIncident,
    getOpenIncidents,
    updateIncident,
} from "../controllers/incidentsController.js";
import {
    middleValidation,
    newIncidentSchema,
    updateIncidentSchema,
} from "../middleware/middlewares.js";
import { createNewLog } from "../controllers/logsController.js";

const incidentsRouter = express.Router();

incidentsRouter.post(
    "/",
    middleValidation(newIncidentSchema),
    async (req, res) => {
        try {
           const newId =  await createNewIncident(req, res);
           await createNewLog(req, res, newId)
        } catch (err) {
            const error = new Error(err.message);
            error.status = 500;
            throw error;
        }
    },
);

incidentsRouter.patch(
    "/:id/status",
    middleValidation(updateIncidentSchema, req.params.id),
    async (req, res) => {
        try {
            await updateIncident(req, res);
        } catch (error) {
            throw error;
        }
    },
);

incidentsRouter.get("/open", async (req, res) => {
    try {
        await getOpenIncidents(req, res);
    } catch (error) {
        throw error;
    }
});

export default incidentsRouter;
