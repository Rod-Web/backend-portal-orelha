import {pool} from '../config/conexao.js'

export async function repositoryCadastrarCliente(dados) {

    const conn = await pool.getConnection()
    
    try{

    await conn.beginTransaction() //inicio transação

    const dadosEndereco = [dados.infosUser.endereco.cep, dados.endereco[0], dados.endereco[1], dados.infosUser.endereco.numero, dados.endereco[2], dados.endereco[3]]

    const [endereco] = await conn.execute(`INSERT INTO endereco (cep, logradouro, bairro, numero, estado, cidade) VALUES (?, ?, ?, ?, ?, ?)`, dadosEndereco)

    const dadosUsuario = [dados.infosUser.cpf, dados.infosUser.nome, dados.infosUser.idade, dados.infosUser.email, dados.senha, dados.infosUser.telefone, dados.usuario]
    
    const [usuario] = await conn.execute(`INSERT INTO usuario (cpf, nome, idade, email, senha, telefone, tipo_usuario) VALUES (?, ?, ?, ?, ?, ?, ?)`, dadosUsuario);

    const dadosCliente = [usuario.insertId, endereco.insertId];

    const [cliente] = await conn.execute(`INSERT INTO cliente (id_usuario, id_endereco) VALUES (?, ?)`, dadosCliente);
    
    conn.commit()

    const affectedRow = {usuario: usuario.affectedRows, endereco: endereco.affectedRows, cliente: cliente.affectedRows} 

    console.log(affectedRow)

    return affectedRow


}catch(erro) {
    await conn.rollback()

    throw erro;
    
} finally{
    conn.release()
}

}