import {conexao} from '../config/conexao.js'

export async function repositoryBuscarClientePorCampo(campo, valor) {
    const conn = await conexao();
    const [cliente] = await conn.execute(`SELECT * FROM cliente WHERE ${campo} = ?`, [valor]);

    return cliente
};

