const passport=require('passport');
const keys=require('../config/keys');
const mongoose=require('mongoose');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const User=mongoose.model('users');
//id indicates the Mongo id here
passport.serializeUser((user,done)=>{
   done(null,user.id);
})
passport.deserializeUser((id,done)=>{
   User.findById(id)
   .then(user=>{
      done(null,user)
   })
})
passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback', //run time problem
    proxy:true 
}, async (accessToken,refreshToken,profile,done)=>{
   console.log("accessToken",accessToken);
   console.log("profile",profile);
   // new User({googleId:profile.id}).save();
   User.findOne({googleId:profile.id})
       .then(existingUser=>{
          if(existingUser){
             done(null,existingUser);
          }else{
             new User({googleId:profile.id}).save()
             .then(user=>done(null,user));
          }
       })
   // const existinguser=await User.findOne({googleId:profile.id})
   //   if(existingUser){
   //      console.log("find it");
   //      return done(null,existingUser);
   //   }else{
   //      console.log("cannot find")
   //      //profile.id indicates google account id here
   //      const user=await new User({googleId:profile.id}).save()
   //      done(null,user);
   //   }
  }
 )
);