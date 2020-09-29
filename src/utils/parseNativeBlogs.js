export const getNativeBlogs = (allPosts = []) => {
    return allPosts.map((post) => {
        return {
            id: post.node.id,
            title: post.node.title,
            link: post.node.path,
            date: post.node.date,
            image: post.node.coverImage,
            // blogs hosted on this website are called native
            native: true,
        }
    })
}