import { validarCPF } from "./dados/pessoa/cpf.js";
import { validarNome } from "./dados/global/nome.js"
import { validarSenha } from "./dados/pessoa/senha.js";
import { validarEmail} from "./dados/pessoa/email.js"

export function validarAccessMiddlware(req, res, next) {
  const access_token = req.cookies.accessToken;
  if (!access_token) {
    return res
      .status(401)
      .json({ erro: "Cookie do access token não encontrado." });
  }

  next();
}

export function dadosUsuario(req, res, next) {
    const dados = {
        cpf: req.body.cpf,
        nome: req.body.nome,
        senha: req.body.senha,
        email: req.body.email,
    };

    const erro =
        validarCPF(dados.cpf) ||
        validarNome(dados.nome) ||
        validarSenha(dados.senha) ||
        validarEmail(dados.email)

    if (erro) return res.status(400).json({ erro });

    next();
};

