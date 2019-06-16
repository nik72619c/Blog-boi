const express=require('express');
const loginRoute = express.Router();

loginRoute.get('/loginWithTwitter',(req, res)=>{
    //login api
});

loginRoute.get('/',(req, res)=>{
    res.redirect('http://localhost:4200');
})

module.exports= loginRoute;