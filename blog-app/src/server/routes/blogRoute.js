const express=require('express');
const blogRoute = express.Router();
const blogOperations = require('../db/blogOperations');
blogRoute.post('/createBlog',(req, res)=>{
    console.log('req.body', req.body);
    console.log('createBlog route called..');
    blogOperations.createBlog(req.body.blog, req, res);
});

blogRoute.get('/getBlogs', (req, res)=>{
    blogOperations.getBlogs(req, res);
})

module.exports=blogRoute;