const postModel = require("../schemas/post.schema");

module.exports.login = async function(post){ 
    const newPost = new postModel(post);
    const result = await newPost.login();
    return result;
}