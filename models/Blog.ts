interface Blog {
    id: string;
    title: string;
    description: string;
    tags: string[];
    isUpdated: boolean,
    publishedOn: string;
    lastUpdatedOn: string;
    timeline: string[];
    authorId: string;
    comments: string[];
    reactionList: string[];
    views: string;
}
