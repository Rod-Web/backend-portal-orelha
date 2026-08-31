import { validarCPF } from "./dados/cpf.js";
import { validarNome } from "./dados/nome.js"
import { validarIdade} from "./dados/idade.js"
import { validarSenha } from "./dados/senha.js";
import { validarTelefone } from "./dados/telefone.js";
import { validarEmail} from "./dados/email.js"

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

