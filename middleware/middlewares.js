import z from "zod";

const newOperatorSchema = z
    .object({
        name: z.string(),
        role: z.string(),
    });

const newIncidentSchema = z
    .object({
        code_name: z.enum(
            [
                "RED SKY",
                "BLACK FALCON",
                "IRON SHIELD",
                "NIGHT ARROW",
                "SILENT DOME",
            ],
            "Invalid code name. Choose a valid code name.",
        ),
        threat_level: z.enum(
            ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
            "Invalid threat level. Use: LOW | MEDIUM | HIGH | CRITICAL",
        ),
        operator_id: z.number().int(),
    });

const updateIncidentSchema = z
    .object({
        status: z.enum(
            ["OPEN", "TRACKING", "INTERCEPTED", "CLOSED"],
            "Invalid status option. Allowed values: OPEN | TRACKING | INTERCEPTED | CLOSED",
        ),
    });

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
