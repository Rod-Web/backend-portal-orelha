import { pool } from "../config/conexao.js";

export async function repositorySelecionarInscricoesVoluntariados() {
  const [rows] = await pool.query("SELECT * FROM inscricao_voluntariado");
  return rows;
};

export async function repositoryBuscarInscricaoVoluntariadoPorId(id) {
  const [inscricao] = await pool.execute(
    "SELECT * FROM inscricao_voluntariado WHERE id = ?",
    [id],
  );
  return inscricao;
}

export async function repositoryInserirInscricaoVoluntariado(dados) {
  const {
    nome,
    idade,
    email,
    endereco_residencial,
    telefone,
    profissao,
    dias_disponiveis,
    periodos_disponiveis,
    disponibilidade_durante_jornada,
    experiencias_anteriores_trabalho_voluntario,
    possui_habilidade_relevante,
    possui_experiencia_animais,
    ciente_atividades_responsabilidades,
    concorda_orientacoes_regras_seguranca,
    motivacao_interesse,
    id_oportunidade_voluntario,
  } = dados;

  const query = `
        INSERT INTO inscricao_voluntariado (
            nome_completo,
            idade,
            email,
            endereco_residencial,
            telefone_contato,
            profissao_atual,

            dias_disponiveis,
            periodos_disponiveis,
            disponibilidade_durante_jornada,

            experiencias_anteriores_trabalho_voluntario,
            possui_habilidade_relevante,
            possui_experiencia_animais,
            ciente_atividades_responsabilidades,
            concorda_orientacoes_regras_seguranca,
            motivacao_interesse,

            id_oportunidade_voluntario
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  const values = [
    nome,
    idade,
    email,
    endereco_residencial,
    telefone,
    profissao,
    dias_disponiveis,
    periodos_disponiveis,
    disponibilidade_durante_jornada,
    experiencias_anteriores_trabalho_voluntario,
    possui_habilidade_relevante,
    possui_experiencia_animais,
    ciente_atividades_responsabilidades,
    concorda_orientacoes_regras_seguranca,
    motivacao_interesse,
    id_oportunidade_voluntario,
  ];

  const [result] = await pool.execute(query, values);

  return result.affectedRows;
}

export async function repositoryEditarStatusInscricaoVoluntariado(id, status) {
    const [result] = await pool.execute(`UPDATE inscricao_voluntariado SET status = ? WHERE id = ?`, [status, id]);
    return result.affectedRows
}

export async function repositoryDeletarInscricaoVoluntariadoPorId(id) {
  const [result] = await pool.execute(`DELETE FROM inscricao_voluntariado WHERE id = ?`, [id]);
  return result.affectedRows
};