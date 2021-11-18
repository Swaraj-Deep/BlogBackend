const errorFactory = require('../../exceptions/newErrorFactory');

function getAllBlogs(req, res, next) {
    res.status(200).json({
        message: "Ok", data: []
    });
}

function getSingleBlog(req, res, next) {
    res.status(200).json({
        message: "Ok", data: {}
    });
}

module.exports = {getAllBlogs, getSingleBlog};
