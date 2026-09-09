export function middlewaresError(err, req, res, next) {
    const status = err.status || 500
    if(status === 500) {
        console.error(err)
        return res.status(status).json({
            erro: "Erro interno no servidor. Informe o suporte técnico.",
        });
    };


    return res.status(status).json({
        erro: err.message || "Erro interno no servidor. Informe o suporte técnico."
    });
};