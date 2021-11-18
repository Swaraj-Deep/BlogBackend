const errorFactory = require('../../exceptions/newErrorFactory');
const getKeys = require('../../modelProperties/getKeysForModels');
const getRequestBody = require('../../services/getRequestBody');

function newBlog(req, res, next) {
    const keys = getKeys('Blog');
    getRequestBody(keys, req.body).then(blog => {
        res.status(201).json({message: "Ok", data: blog});
    }).catch(err => {
        next(err)
    });
}

module.exports = newBlog;
