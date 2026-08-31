export function middlewaresError(err, req, res, next) {
    const status = err.status || 500
    return res.status(status).json({
        erro: err.message || "Erro interno no servidor. Informe o suporte técnico."
    });
};