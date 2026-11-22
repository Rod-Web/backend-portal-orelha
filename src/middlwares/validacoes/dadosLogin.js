import {validarUsername} from './dados/pessoa/username.js'
import { validarSenha } from './dados/pessoa/senha.js';

export function dadosLogin(req, res, next) {
  if (!req.body) {
    return res.status(400).json({
      erro: "O corpo da requisição não foi informado.",
    });
  }
    const {username, senha} = req.body

    const erro = validarUsername(username) || validarSenha(senha);

    if(erro) {
        console.error(erro);
        return res.status(400).json({erro: "Dados inválidos"});
    }

    next();
};