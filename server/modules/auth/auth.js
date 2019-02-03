import passport from 'passport';
import { Strategy } from 'passport-google-oauth2';
import User from '../users/user.model';

const GoogleOAuth2Strategy = Strategy;

passport.use(new GoogleOAuth2Strategy({
  clientID: '510678723622-nq1vvdsdpv2e8t6qf7h8phgqufgdmo5l.apps.googleusercontent.com',
  clientSecret: '84vG1CFdOl4C87FicfpwNezi',
  callbackURL: `${process.env.APP_URL}/auth/google/callback`,
}, (req, accessToken, refreshToken, profile, done) => {
  const createNewuser = () => {
    const newUser = new User({
      name: profile.displayName,
      email: profile.email,
      profileImage: profile.image.url
    });
    newUser.save((err, user) => {
      done(err, user);
    });
  };

  const ifUserExists = (err, user) => {
    user ? done(err, user) : createNewuser();
  };

  User.find({ email: profile.email }, ifUserExists);
},
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
