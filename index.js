const axios = require('axios');
const fs = require('fs');
const {format} = require('date-fns');
const args = process.argv.slice(2);
const GITHUB_API_V4_TOKEN = args[0];
const NUMBER_OF_REPOS = args[1];

const query = `query($number_of_repos: Int!){
    user(login: \"shubhamzanwar\") {
        repositories(first: $number_of_repos, orderBy: {field: STARGAZERS,direction: DESC}, privacy: PUBLIC) {
            nodes {
                id,
                name,
                description,
                url,
                repositoryTopics(first: 5) {
                    totalCount,
                    nodes { 
                        topic {
                            name
                        }
                    }
                },
                primaryLanguage {
                    color
                    name
                },
                stargazers {
                    totalCount
                },
                languages(first: 5) {
                    nodes {
                        color,
                        name
                    }
                }
            }
        }
    }
}`;

const variables = {
    number_of_repos: parseInt(NUMBER_OF_REPOS)
};

shouldIncludeRepo = (repo) => {
    const topics = repo.repositoryTopics.nodes;

    for (let index = 0; index < topics.length; index++) {
        if(topics[index].topic.name === "portfolio") return true;
    }

    return false;
}

parseRepo = (repo) => {
    return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.url,
        topics: repo.repositoryTopics.nodes.map((topic) => topic.topic.name),
        primaryLanguage: repo.primaryLanguage,
        stargazers: repo.stargazers.totalCount,
        languages: repo.languages.nodes
    }
}

const shouldIncludeBlog = (post) => {
    return post.categories.length > 0;
}

const parseBlog = (blog) => {
    return {
        id: blog.guid,
        title: blog.title,
        link: blog.link,
        date: format(new Date(blog.pubDate), 'dd MMM yyyy'),
        image: blog.thumbnail,
        categories: blog.categories,
    }
}

const fetchRepos = async () => {
    const {data} = await axios({
        url: 'https://api.github.com/graphql',
        method: 'POST',
        data: {query, variables},
        headers: {
            authorization: `bearer ${GITHUB_API_V4_TOKEN}`,
            'Content-Type': 'application/json'
        }
    });
    const repos = data.data.user.repositories.nodes;
    const reposToStore = repos.reduce((acc, repo) => {
        if(shouldIncludeRepo(repo)){
            return [...acc, parseRepo(repo)];
        }
        return acc;
    }, []);
    fs.writeFileSync('./src/constants/projects.json', JSON.stringify(reposToStore));
}

const fetchPosts = async () => {
    const {data} = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zanwar.shubham');
    if(data.status === "ok") {
        const allPosts = data.items;
        const blogs = allPosts.filter(shouldIncludeBlog);

        const parsedBlogs = blogs.map(parseBlog);
        fs.writeFileSync('./src/constants/blogs.json', JSON.stringify(parsedBlogs));
    }
}

fetchRepos();
fetchPosts();