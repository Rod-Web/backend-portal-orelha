import { pool } from "../config/conexao.js";

export async function repositoryBuscarTrabalhosVoluntario() {
    const [oportunidades] = await pool.query("SELECT * FROM oportunidade_voluntariado");
    return oportunidades;
};

export async function repositoryBuscarTrabalhoVoluntarioPorId(id) {
    const [oportunidade] = await pool.execute("SELECT * FROM oportunidade_voluntariado WHERE id = ?", [id]);
    return oportunidade
};

export async function repositoryBuscarTrabalhoVoluntarioPorCampo(campo, valor) {
    const [oportunidade] = await pool.execute(`SELECT * FROM oportunidade_voluntariado WHERE ${campo} = ?`, [valor]);
    return oportunidade;
};

export async function repositoryCadastrarTrabalhoVoluntario(dados) {
  const { titulo, descricao, local, data_inicio, jornada, status } =
    dados;

  const query =
    "INSERT INTO oportunidade_voluntariado (titulo, descricao, local, data_inicio, jornada, status) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    titulo,
    descricao,
    local,
    data_inicio,
    jornada,
    status
  ];
  const [result] = await pool.execute(query, values);
  return result.affectedRows;
};

export async function repositoryEditarTrabalhoVoluntario(id, dados) {
  const { titulo, descricao, local, data_inicio, jornada, status } = dados;
  const query =
    "UPDATE oportunidade_voluntariado SET titulo = ?, descricao = ?, local = ?, data_inicio = ?, jornada = ?, status = ? WHERE id = ?";
  const values = [
    titulo, 
    descricao, 
    local, 
    data_inicio, 
    jornada, 
    status,
    id,
  ];

  console.log(status)
  const [result] = await pool.execute(query, values);
  return result.affectedRows;
}

export async function repositoryDeletarTrabalhoVoluntarioPorId(id) {
  const [result] = await pool.execute(`DELETE FROM oportunidade_voluntariado WHERE id = ?`, [id]);
  return result.affectedRows 
};