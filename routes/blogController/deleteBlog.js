function deleteBlog(req, res, next) {
    res.status(200).json({message: "Ok", data: {}});
}

module.exports = deleteBlog;
