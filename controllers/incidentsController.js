import ironRepo from "../repositories/baseRepository.js";
import {
    extractFilters,
    extractNewBody,
    extractUpdateBody,
} from "../services/ironServices.js";

const TABLE = "incidents";

async function createNewIncident(req, res) {
    req.body.status = "OPEN";
    const queryParameters = extractNewBody(req.body);
    const newIncident = await ironRepo.createNew(TABLE, queryParameters);
    res.status(201).json({
        success: true,
        data: `New incident created successfully, ID: ${newIncident.insertId}`,
    });
    return newIncident.insertId;
}

async function updateIncident(req, res) {
    const queryParameters = extractUpdateBody(req);
    const updateIncident = await ironRepo.updateData(TABLE, queryParameters);
    res.status(200).json({
        success: true,
        message: `Updated ${tableName} successfully. Rows affected: ${updateIncident}`,
    });
}

async function getOpenIncidents(req, res) {
    const query = extractFilters({ status: "OPEN" });
    const allOpenIncidents = await ironRepo.getFromTable(TABLE, query);
    res.status(200).json({ success: true, data: allOpenIncidents });
}

export { createNewIncident, getOpenIncidents, updateIncident };
