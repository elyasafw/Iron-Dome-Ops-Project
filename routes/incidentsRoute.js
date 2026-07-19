import express from "express";
import {
    createNewIncident,
    getOpenIncidents,
    updateIncident,
} from "../controllers/incidentsController.js";
import { createNewLog } from "../controllers/logsController.js";
import {
    middleValidation,
    newIncidentSchema,
    updateIncidentSchema,
} from "../middleware/middlewares.js";

const incidentsRouter = express.Router();

incidentsRouter.post(
    "/",
    middleValidation(newIncidentSchema),
    async (req, res) => {
        try {
            const newIncident = await createNewIncident(req, res);
            await createNewLog(req, res, newIncident);
            res.status(201).json({
                success: true,
                data: `New incident created successfully, ID: ${newIncident.incident_id}`,
            });
        } catch (err) {
            const error = new Error(err.message);
            error.status = 500;
            throw error;
        }
    },
);

incidentsRouter.patch(
    "/:id/status",
    middleValidation(updateIncidentSchema),
    async (req, res) => {
        try {
            const updated = await updateIncident(req, res);
            await createNewLog(req, res, updated);
            res.status(200).json({
                success: true,
                message: `Updated incident ID: ${req.params.id} successfully`,
            });
        } catch (error) {
            throw error;
        }
    },
);

incidentsRouter.get("/open", async (req, res) => {
    try {
        const opensIncidents = await getOpenIncidents(req, res);
        res.status(200).json({ success: true, data: opensIncidents });
    } catch (error) {
        throw error;
    }
});

export default incidentsRouter;
