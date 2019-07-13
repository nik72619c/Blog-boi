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
const User= require('./db/schema/userSchema');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.get('/', (request, response)=>{

// response.send('node backend works');

// });
app.use(session({
  secret: 'nik',
  resave: true,
  saveUninitialized: false,
  cookie: { 
    secure: false
}
}));
app.use(passport.initialize());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

passport.use(new TwitterStrategy({
    consumerKey: 'udN3PBp4JUqVgmDDCapBzPLPo',
    consumerSecret: 'kB4UTIiXHvNCKL5qpWzqcR6u1FdpIXwmMLjXg3KLwtmwC3mJYV',
    callbackURL: "/auth/callback",
  },
  function(accessToken, refreshToken, profile, done) {
        console.log('access token ', accessToken);
        console.log('profile ',profile);
        console.log('refresh token ', refreshToken);
        console.log("Call to DB  to store data");
        User.findOne({
          'uid': profile.id 
      }, function(err, user) {
          if (err) {
              return done(err);
          }
          //No user was found... so create a new user with values from Facebook (all the profile. stuff)
          if (!user) {
            console.log('user not found, creating a new user');
              user = new User({
                  username: profile.username,
                  email: profile.emails,
                  bio: profile._json.description,
                  uid: profile.id
              });
              user.save(function(err) {
                  if (err) console.log(err);
                  return done(err, user);
              });
          } else {
              //found user. Return
              console.log('user already exists, moving forward..');
              return done(err, user);
          }
      });
  }
));

app.get('/loginWithTwitter',
  passport.authenticate('twitter'));
  app.get('/auth/callback',
  passport.authenticate('twitter', { failureRedirect: '/',session: true, scope: ['email'] }),
  function(req, res) {
    // Successful authentication, redirect home.
   res.redirect('http://localhost:4200/dashboard');
  });
  passport.serializeUser((user, done)=> {
    console.log('serialiseUser function called');
    done(null, user.uid);
});

passport.deserializeUser((id, done) => {
  console.log('deserialiseUser function called..');
	User.findOne({'uid': id}).then(user => {
    console.log('user detected in deserialiseUser function');
		done(null, user);
	});
});

  //app.use('/blog', blogRoute);
app.use('/',blogRoute);
var port =process.env.PORT || 1234;
app.listen(port,()=>{
    process.stdout.write('server started on port '+port);
});
