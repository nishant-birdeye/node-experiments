import User from '../users/user.model';

export function loginError(req, res) {
  res.json({ Error: 'Login failed' }).send(200);
}

export function whoAmI(req, res) {
  User.findById(req.user, (error, user) => {
    !error ? res.status(200).send({ user }) : res.status(403).send({ error });
  });
}
