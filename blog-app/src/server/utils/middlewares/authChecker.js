function authChecker (req, res , next){
    if(req.isAuthenticated()){
        next();
    }
    else{
        res.json({
            message: 'user not logged in , redirect to login',
            status: 404
        });
    }
}

module.exports=authChecker;