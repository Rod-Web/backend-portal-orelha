import {pool} from '../config/conexao.js'

export async function repositoryCadastrarFuncionario(dados) {

    const conn = await pool.getConnection()
    
    try{

    await conn.beginTransaction() //inicio transação

    const dadosUsuario = [dados.infosUser.cpf, dados.infosUser.nome, dados.infosUser.idade, dados.infosUser.email, dados.senha, dados.infosUser.telefone, dados.usuario]
    
    const [usuario] = await conn.execute(`INSERT INTO usuario (cpf, nome, idade, email, senha, telefone, tipo_usuario) VALUES (?, ?, ?, ?, ?, ?, ?)`, dadosUsuario);

    const dadosFuncionario = [usuario.insertId];

    const [funcionario] = await conn.execute(`INSERT INTO funcionario (id_usuario) VALUES (?)`, dadosFuncionario);
    
    conn.commit()

    const affectedRow = {usuario: usuario.affectedRows, funcionario: funcionario.affectedRows} 

    console.log(affectedRow)

    return affectedRow


}catch(erro) {
    await conn.rollback()

    throw erro;
    
} finally{
    conn.release()
}

}