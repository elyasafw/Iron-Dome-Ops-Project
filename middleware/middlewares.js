import z from "zod";

const newOperatorSchema = z
    .object({
        name: z.string(),
        role: z.string(),
    })
    .strict();

const newIncidentSchema = z
    .object({
        code_name: z.string(),
        threat_level: z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]),
        operator_id: z.number().int(),
    })
    .strict();

const updateIncidentSchema = z
    .object({
        status: z.enum(["OPEN", "TRACKING", "INTERCEPTED", "CLOSED"]),
    })
    .strict();

function middleValidation(schema) {
    return (req, res, next) => {
        const id = req.params.id;
        if (id !== undefined && isNaN(Number(id))) {
            const error = new Error("The ID must be a valid number");
            error.status = 400;
            throw error;
        }
        const result = schema.safeParse(req.body);
        if (!result.success) {
            throw result.error;
        }
        req.body = result.data;
        next();
    };
}

export {
    middleValidation,
    newIncidentSchema,
    newOperatorSchema,
    updateIncidentSchema,
};
