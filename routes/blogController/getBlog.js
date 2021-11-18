const errorFactory = require('../../exceptions/newErrorFactory');

function getAllBlogs(req, res, next) {
    res.status(200).json({
        message: "Ok", data: [{
            id: '001',
            title: 'Blog One',
            description: 'Blog One Description',
            tags: ['C++', 'JavaScript', 'Java'],
            isUpdated: true,
            publishedOn: new Date().toLocaleDateString(),
            lastUpdatedOn: new Date().toLocaleDateString(),
            timeline: ['001', '002'],
            authorId: '001',
            comments: ['001', '002'],
            reaction: ['001', '002'],
            views: '11569'
        }, {
            id: '002',
            title: 'Blog Two',
            description: 'Blog Two Description',
            tags: ['C++', 'JavaScript', 'Java'],
            isUpdated: true,
            publishedOn: new Date().toLocaleDateString(),
            lastUpdatedOn: new Date().toLocaleDateString(),
            timeline: ['001', '002'],
            authorId: '001',
            comments: ['001', '002'],
            reaction: ['001', '002'],
            views: '11569'
        }, {
            id: '003',
            title: 'Blog Three',
            description: 'Blog Three Description',
            tags: ['C++', 'JavaScript', 'Java'],
            isUpdated: true,
            publishedOn: new Date().toLocaleDateString(),
            lastUpdatedOn: new Date().toLocaleDateString(),
            timeline: ['001', '002'],
            authorId: '001',
            comments: ['001', '002'],
            reaction: ['001', '002'],
            views: '11569'
        }]
    });
}

function getSingleBlog(req, res, next) {
    res.status(200).json({
        message: "Ok", data: {
            id: '001',
            title: 'Blog One',
            description: 'Blog One Description',
            tags: ['C++', 'JavaScript', 'Java'],
            isUpdated: true,
            publishedOn: new Date().toLocaleDateString(),
            lastUpdatedOn: new Date().toLocaleDateString(),
            timeline: ['001', '002'],
            authorId: '001',
            comments: ['001', '002'],
            reaction: ['001', '002'],
            views: '11569'
        }
    });
}

module.exports = {getAllBlogs, getSingleBlog};
