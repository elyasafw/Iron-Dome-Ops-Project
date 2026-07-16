import z from "zod";

const newOperatorSchema = z
    .object({
        name: z.string(),
        rank: z.string(),
    })
    .strict();

const newIncdentSchema = z
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

async function middleValidation(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const error = new Error(
                `Validation Error: ${result.error.errors[0].message}`,
            );
            error.status = 400;
            throw error;
        }
        req.body = result.data;
        next();
    };
}

export {
    middleValidation,
    newIncdentSchema,
    newOperatorSchema,
    updateIncidentSchema,
};
