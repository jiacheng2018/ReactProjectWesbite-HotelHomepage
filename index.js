const express=require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const keys=require('./config/keys');
const app=express();
require('./models/User');
require ('./services/passport');
app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookiekey]
    })
)
app.use(passport.initialize());
app.use(passport.session());
mongoose.set('useUnifiedTopology', true);
mongoose.connect(keys.mongoURI,{ useNewUrlParser: true});
const PORT=process.env.PORT||5000;
require('./routes/authRoutes')(app);
app.listen(PORT);