function exceptionHandler(err, req, res, next) {
    const parsedMessage = JSON.parse(err.message);
    if (res.headersSent) {
        next(err);
    }
    res.status(parsedMessage.statusCode).json(parsedMessage.data);
}

module.exports = exceptionHandler;
