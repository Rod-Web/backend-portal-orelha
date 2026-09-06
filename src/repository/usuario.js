import { pool } from "../config/conexao.js";

export async function repositoryBuscarUsuarioPorCampo(campo, valor) {
    const [usuario] = await pool.execute(`SELECT * FROM usuario WHERE ${campo} = ?`, [valor]);
    return usuario
};
