const express=require('express');
const app=express();
// const cors=require('./utils/middlewares/cors');
const cors=require('cors');
const loginRoute= require('./routes/loginRoute');
const bodyParser= require('body-parser');
const config=require('./db/common/config');
const passport=require('passport');
const TwitterStrategy=require('passport-twitter');
const session= require('express-session');
const blogRoute= require('./routes/blogRoute');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.get('/', (request, response)=>{

// response.send('node backend works');

// });
app.use(session({
  secret: 'nik'
}));
app.use(passport.initialize());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

passport.use(new TwitterStrategy({
    consumerKey: 'udN3PBp4JUqVgmDDCapBzPLPo',
    consumerSecret: 'kB4UTIiXHvNCKL5qpWzqcR6u1FdpIXwmMLjXg3KLwtmwC3mJYV',
    callbackURL: "/auth/callback"
  },
  function(accessToken, refreshToken, profile, done) {
        console.log('access token ', accessToken);
        console.log('profile ',profile);
        console.log('refresh token ', refreshToken);
        console.log("Call to DB  to store data");
        return done(null,{profile}); 
  }
));

app.get('/loginWithTwitter',
  passport.authenticate('twitter'));
  app.get('/auth/callback',
  passport.authenticate('twitter', { failureRedirect: '/',session: false, scope:['email'] }),
  function(req, res) {
    // Successful authentication, redirect home.
   res.redirect('http://localhost:4200/dashboard');
  });

  //app.use('/blog', blogRoute);
app.use('/',blogRoute);
var port =process.env.PORT || 1234;
app.listen(port,()=>{
    process.stdout.write('server started on port '+port);
});
