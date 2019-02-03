import passport from 'passport';
import { Strategy } from 'passport-google-oauth2';

const GoogleOAuth2Strategy = Strategy;

passport.use(new GoogleOAuth2Strategy({
  clientID: '510678723622-nq1vvdsdpv2e8t6qf7h8phgqufgdmo5l.apps.googleusercontent.com',
  clientSecret: '84vG1CFdOl4C87FicfpwNezi',
  callbackURL: `${process.env.APP_URL}/auth/google/callback`,
}, (req, accessToken, refreshToken, profile, done) => {
  done(null, { username: 'abhi kaha hai bhala' });
  // User.findOrCreate(..., function (err, user) {
  //   done(err, user);
  // });
},
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
