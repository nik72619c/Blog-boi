const User= require('../db/schema/userSchema');
const Blog= require('../db/schema/blogSchema');

var blogOperations={
    createBlog: async (blog, req, res)=>{
        //TODO function for creating and saving a new blog
        console.log('blog received', blog);
    },
    updateBlog: async ()=>{
    //TODO function for updating the existing blog
    },
    getBlogs: async ()=>{
        //TODO function for getting all the blogs for the user to view and read
    }
};

module.exports=blogOperations;