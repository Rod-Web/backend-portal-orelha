import {pool} from '../config/conexao.js'

export async function repositoryBuscarClientePorCampo(campo, valor) {
    const [cliente] = await pool.execute(`SELECT * FROM cliente WHERE ${campo} = ?`, [valor]);

    return cliente
};

export async function repositoryCadastrarCliente(dados) {

    const conn = await pool.getConnection()
    
    try{

    await conn.beginTransaction() //inicio transação

    const dadosEndereco = [dados.infosUser.endereco.cep, dados.endereco[0], dados.endereco[1], dados.infosUser.endereco.numero, dados.endereco[2], dados.endereco[3]]

    const [endereco] = await conn.execute(`INSERT INTO endereco (cep, logradouro, bairro, numero, estado, cidade) VALUES (?, ?, ?, ?, ?, ?)`, dadosEndereco)

    const dadosCliente = [dados.infosUser.cpf, dados.infosUser.nome, dados.infosUser.idade, dados.infosUser.email, dados.senha, dados.infosUser.telefone, endereco.insertId]
    
    const [cliente] = await conn.execute(`INSERT INTO cliente (cpf, nome, idade, email, senha, telefone, endereco_id) VALUES (?, ?, ?, ?, ?, ?, ?)`, dadosCliente )

    conn.commit()

    const affectedRow = {cliente: cliente.affectedRows, endereco: endereco.affectedRows
    } 

    console.log(affectedRow)

    return affectedRow


}catch(erro) {
    await conn.rollback()

    throw erro;
    
} finally{
    conn.release()
}

}