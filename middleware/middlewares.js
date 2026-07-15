function validateStatus(req, res, next) {
    const allowedStatuses = ["OPEN", "TRACKING", "INTERCEPTED", "CLOSED"];
    const currentStatus = req.body.status;

    if (!allowedStatuses.includes(currentStatus)) {
        return res.status(400).json({
            error: `The value ${currentStatus} is invalid, the allowed values ​​are: ${allowedStatuses.join(" | ")}`,
        });
    }
    next();
}

export { validateStatus };
