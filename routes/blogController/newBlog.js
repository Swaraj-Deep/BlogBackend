const errorFactory = require('../../exceptions/newErrorFactory');

function newBlog(req, res, next) {
    res.status(201).json({message: "Ok", data: {}});
}

module.exports = newBlog;
