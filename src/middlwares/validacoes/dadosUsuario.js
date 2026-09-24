import { validarCPF } from "./dados/pessoa/cpf.js";
import { validarNome } from "./dados/global/nome.js"
import { validarIdade} from "./dados/pessoa/idade.js"
import { validarSenha } from "./dados/pessoa/senha.js";
import { validarTelefone } from "./dados/pessoa/telefone.js";
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
        idade: req.body.idade,
        senha: req.body.senha,
        telefone: req.body.telefone,
        email: req.body.email,
    };

    const erro =
        validarCPF(dados.cpf) ||
        validarNome(dados.nome) ||
        validarIdade(dados.idade) ||
        validarSenha(dados.senha) ||
        validarTelefone(dados.telefone) ||
        validarEmail(dados.email)

    if (erro) return res.status(400).json({ erro });


    next();
};

