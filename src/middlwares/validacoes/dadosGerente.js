

export function validarCookie(req, res, next) {
  const access_token = req.cookies.accessToken;
  if (!access_token) {
    return res.status(401).json({ erro: "O cookie access não existe." });
  }

  next();
}