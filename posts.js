// npm install axios --save-dev
const axios = require("axios");

// Set your WordPress REST API URL
const postsUrl = `https://cms.resknow.net/site-name/wp-json/wp/v2/posts`;

/**
 * Return blog posts
 * The variable name in 11ty will depend on what you name your data file
 */
module.exports = async () => {
    const posts = await axios.get(postsUrl);
    return posts.data
};