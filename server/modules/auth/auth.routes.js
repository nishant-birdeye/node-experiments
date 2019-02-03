import { Router } from 'express';
import passport from 'passport';
import { loginError, whoAmI } from './auth.controller';

require('./auth');
const router = new Router();

router.route('/google').get(passport.authenticate('google', { scope:
    ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.profile.emails.read']
}));

router.route('/google/callback').get(passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/auth/google/failure'
}));

router.route('/google/failure').get(loginError);
router.route('/me').get(whoAmI);

export default router;
