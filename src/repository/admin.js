import { pool } from "../config/conexao.js";

export async function repositoryBuscarAdminPorCampo(campo, valor) {
    try {
        const [administrador] = await pool.execute(
            `SELECT * FROM administrador WHERE ${campo} = ?`,
            [valor]
        );


        return administrador;
    } catch (erro) {
        throw erro;
    }
}

export async function repositoryCadastrarAdmin(dados) {
  try {
    const dadosAdmin = [
      dados.infosUser.nome,
      dados.infosUser.cpf,
      dados.infosUser.email,
      dados.senha,
    ];
    const [admin] = await pool.execute(
      `INSERT INTO administrador (nome, cpf, email, senha) VALUES (?, ?, ?, ?)`,
      dadosAdmin,
    );

    const affectedRow = { admin: admin.affectedRows };
    return affectedRow;
  } catch (erro) {
    throw erro;
  }
}
