const errorFactory = require('../exceptions/newErrorFactory');

function extractRequestBody(keys, requestObject) {
    return new Promise((resolve, reject) => {
        const extractedObj = {};
        for (let key of keys) {
            if (requestObject.hasOwnProperty(key)) {
                extractedObj[key] = requestObject[key];
            } else {
                reject(errorFactory(400, 'Invalid Request Body', 'Bad Request'));
            }
        }
        resolve(extractedObj);
    });
}

module.exports = extractRequestBody;
