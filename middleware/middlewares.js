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
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const firstErrorMessage =
                result.error.issues[0]?.message || "Invalid data structure";
            const error = new Error(`Validation Error: ${firstErrorMessage}`);
            error.status = 400;
            throw error;
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
