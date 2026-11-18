import {statusForms} from "./dados/global/statusForms.js"

export function validarStatusForms(req, res, next) {

    if (!req.body) return res.status(400).json({ erro: "O corpo da requisição não foi informado." });
    
    const { status } = req.body;
    const erro = statusForms(status);
    if (erro) return res.status(400).json({ erro });

    next();
};