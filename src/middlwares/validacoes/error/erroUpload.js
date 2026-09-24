export function tratarErroUpload(err, req, res, next) {
  if (err) {
    return res.status(400).json({
      erro: err.message,
    });
  }

  next();
}
