import { serviceInserirFuncionario } from "../service/gerente.js";

export async function controllerGerente(req, res, next) {
    try {
      const dados = {
        cpf: req.body.cpf,
        nome: req.body.nome,
        idade: req.body.idade,
        senha: req.body.senha,
        telefone: req.body.telefone,
        email: req.body.email
      };

      const nomeFuncionario = await serviceInserirFuncionario(dados);
      // TEM QUE VER O QUE VAMOS RETORNAR
      return res.status(201).json({ nomeFuncionario });

    } catch (error) {
        next(error);
    };
};