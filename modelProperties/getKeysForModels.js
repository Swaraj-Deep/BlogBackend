function getKeysForModels(modelName) {
    return {
        Blog: [
            'id',
            'title',
            'description',
            'tags',
            'isUpdated',
            'publishedOn',
            'lastUpdatedOn',
            'timeline',
            'authorId',
            'comments',
            'reactionList',
            'views'
        ],
        Author: [
            'id',
            'name',
            'email',
            'phoneNumber',
            'dob',
            'userName',
            'password',
            'turnedOnTFA',
            'country',
            'linkedInURL',
            'twitterURL',
            'metaURL',
            'instagramURL'
        ],
        Comment: [
            'id',
            'authorId',
            'comment',
            'reactionList',
            'commentedOn'
        ],
        Reaction: [
            'id',
            'reactionType',
            'authorId'
        ]
    }[modelName];
}

module.exports = getKeysForModels;
