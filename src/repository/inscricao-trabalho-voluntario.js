import { pool } from "../config/conexao.js";


export async function repositoryCadastrarInscricaoTrabalhoVoluntario(dados) {
  console.log(dados)
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
