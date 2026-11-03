export function middlewaresError(err, req, res, next) {
  console.log(err.message);

  const status = err.status || (err.name === "MulterError" ? 400 : 500);

  if (status === 500) {
    return res.status(status).json({
      erro: "Erro interno no servidor. Informe o suporte técnico.",
    });
  }

  return res.status(status).json({
    erro: err.message || "Erro interno no servidor.",
  });
}
