import { serviceInserirAdmin } from "../service/admin.js";

export async function controllerInserirAdmin(req, res, next) {
    try {
      const dados = {
        cpf: req.body.cpf,
        nome: req.body.nome,
        senha: req.body.senha,
        email: req.body.email
      };

      const nomeAdmin = await serviceInserirAdmin(dados);
      // TEM QUE VER O QUE VAMOS RETORNAR
      return res.status(201).json({ nomeAdmin });

    } catch (error) {
        next(error);
    };
};