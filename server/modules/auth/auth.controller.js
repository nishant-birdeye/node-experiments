
export function loginError(req, res) {
  res.json({ Error: 'Login failed' }).send(200);
}

export function loginCallback(req, res) {
  res.send(200);
}
