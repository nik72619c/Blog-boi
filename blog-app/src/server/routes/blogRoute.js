const express=require('express');
const blogRoute = express.Router();
const authChecker= require('../utils/middlewares/authChecker');
const blogOperations = require('../db/blogOperations');
blogRoute.post('/createBlog',authChecker,(req, res)=>{
    console.log('req.body', req.body);
    console.log('createBlog route called..');
    blogOperations.createBlog(req.body.blog, req, res);
});

blogRoute.get('/getBlogs',authChecker, (req, res)=>{
    blogOperations.getBlogs(req, res);
});

module.exports=blogRoute;