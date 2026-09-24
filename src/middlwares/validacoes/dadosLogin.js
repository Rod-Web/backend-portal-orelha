import {validarCPF} from './dados/pessoa/cpf.js'
import { validarSenha } from './dados/pessoa/senha.js';

export function dadosLogin(req, res, next) {

    const {cpf, senha} = req.body

    const erro = validarCPF(cpf) || validarSenha(senha);

    if(erro) {
        console.error(erro);
        return res.status(400).json({erro: "Dados inválidos"});
    }

    next();
};