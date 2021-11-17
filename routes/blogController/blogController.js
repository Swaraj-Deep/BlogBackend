const express = require('express');
const newBlog = require('./newBlog');
const {getAllBlogs, getSingleBlog} = require('./getBlog');
const updateBlog = require('./updateBlog');
const deleteBlog = require('./deleteBlog');
const router = express.Router();

router.get('/get', getAllBlogs);
router.get('/get/:id', getSingleBlog);

router.post('/new', newBlog);

router.patch('/update/:id', updateBlog);

router.delete('/delete/:id', deleteBlog);

module.exports = router;
