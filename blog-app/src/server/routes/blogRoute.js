const express=require('express');
const blogRoute = express.Router();
const blogOperations = require('../db/blogOperations');
blogRoute.put('/createBlog',(req, res)=>{
    console.log('createBlog route called..');
    blogOperations.createBlog(blog, req, res);
});

module.exports=blogRoute;