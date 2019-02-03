
export function loginError(req, res) {
  res.json({ Error: 'Login failed' }).send(200);
}

export function whoAmI(req, res) {
  res.json({ user: req.user }).send(200);
}
