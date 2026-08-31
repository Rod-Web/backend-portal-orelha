import {pool} from '../config/conexao.js'

export async function repositoryBuscarClientePorCampo(campo, valor) {
    const [cliente] = await pool.execute(`SELECT * FROM cliente WHERE ${campo} = ?`, [valor]);

    return cliente
};

