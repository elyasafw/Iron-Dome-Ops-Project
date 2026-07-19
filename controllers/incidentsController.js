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
    return {
        action: "INCIDENT_CREATED",
        incident_id: newIncident.insertId,
        operator_id: req.body.operator_id,
        description: "New incident created",
    };
}

async function updateIncident(req, res) {
    const queryParameters = extractUpdateBody(req.body, req.params.id);
    await ironRepo.updateData(TABLE, queryParameters);
    const queryFilter = extractFilters(req.params);
    const details = await ironRepo.selectFromTable(TABLE, queryFilter);
    return {
        action: "STATUS_UPDATE",
        incident_id: details[0].id,
        operator_id: details[0].operator_id,
        description: `Status changed to ${details[0].status}`,
    };
}

async function getOpenIncidents(req, res) {
    const query = extractFilters({ status: "OPEN" });
    const allOpenIncidents = await ironRepo.selectFromTable(TABLE, query);
    return allOpenIncidents;
}

export { createNewIncident, getOpenIncidents, updateIncident };
