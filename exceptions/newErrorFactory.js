class CustomError extends Error {
    constructor(message, errorName) {
        super(message);
        this.name = errorName;
    }
}

function newErrorFactory(statusCode = 500, message = 'Unexpected Error Occured', errorName = 'Internal Server Error') {
    message = JSON.stringify({
        statusCode,
        data: {message}
    });
    return new CustomError(message, errorName);
}

module.exports = newErrorFactory;
