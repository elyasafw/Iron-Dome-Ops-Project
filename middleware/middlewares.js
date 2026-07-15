function validateStatus(req, res, next) {
    const allowedStatuses = ["OPEN", "TRACKING", "INTERCEPTED", "CLOSED"];
    const currentStatus = req.body.status;

    if (!allowedStatuses.includes(currentStatus)) {
        const error = new Error(
            `The value '${currentStatus}' is invalid. Allowed values: ${allowedStatuses.join(" | ")}`,
        );
        error.status = 400;
        throw error;
    }
    next();
}

export { validateStatus };
