
import { pool } from "../config/conexao.js";

export async function repositorySelecionarSolicitacoesAdocao() {
    const [rows] = await pool.query("SELECT * FROM solicitacao_adocao");
    return rows;
};

export async function repositoryBuscarSolicitacaoAdocaoPorId(id) {
    const [solicitacao] = await pool.execute(
      "SELECT * FROM solicitacao_adocao WHERE id = ?",
      [id],
    );
    return solicitacao;
}

export async function repositoryInserirSolicitacaoDeAdocao(dados) {
    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();

        const [updateResult] = await conn.execute(
          `UPDATE pet SET status = 'EM_PROCESSO' WHERE numero_identificacao = ? AND status = "DISPONIVEL"`,
          [dados.id_pet],
        );
        if (updateResult.affectedRows !== 1) {
            await conn.rollback();
            return 0;
        };

        const {
            nome,
            idade,
            email,
            endereco_completo,
            cep,
            telefone,
            profissao,
            medidas_seguranca_residencial,
            comodos_acesso_animal,
            possui_outros_animais,
            descricao_animais_existentes,
            racao_atual,
            veterinario_responsavel,
            cuidador_direto,
            quantidade_pessoas_residencia,
            familia_ciente_concorda,
            crianca_convivio,
            animais_anteriores,
            descricao_animais_anteriores,
            rotina_familiar,
            compromisso_adocao_responsavel,
            entrevista,
            id_pet
        } = dados;
        const query = `
            INSERT INTO solicitacao_adocao (
                nome_completo,
                idade,
                email,
                endereco_completo,
                cep,
                telefone_contato,
                profissao,
                medidas_seguranca_residencial,
                comodos_acesso_animal,
                possui_outros_animais,
                descricao_animais_existentes,
                racao_atual,
                veterinario_responsavel,
                cuidador_direto,
                quantidade_pessoas_residencia,
                familia_ciente_concorda,
                crianca_convivio,
                animais_anteriores,
                descricao_animais_anteriores,
                rotina_familiar,
                compromisso_adocao_responsavel,
                entrevista,
                id_pet
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            nome,
            idade,
            email,
            endereco_completo,
            cep,
            telefone,
            profissao,
            medidas_seguranca_residencial,
            comodos_acesso_animal,
            possui_outros_animais,
            descricao_animais_existentes,
            racao_atual,
            veterinario_responsavel,
            cuidador_direto,
            quantidade_pessoas_residencia,
            familia_ciente_concorda,
            crianca_convivio,
            animais_anteriores,
            descricao_animais_anteriores,
            rotina_familiar,
            compromisso_adocao_responsavel,
            entrevista,
            id_pet
        ];
        const [result] = await conn.execute(query, values);

        if (result.affectedRows !== 1) {
            await conn.rollback();
            return 0;
        };

        await conn.commit()
        return result.affectedRows;
    } catch(error) {
        await conn.rollback();
        throw error;
    } finally {
        conn.release();
    }
}

export async function repositoryEditarStatusSolicitacaoAdocao(id, status) {
    const [result] = await pool.execute(`UPDATE solicitacao_adocao SET status = ? WHERE id = ?`, [status, id]);
    return result.affectedRows
}

export async function repositoryEditarEntrevistaSolicitacaoAdocao(id, status) {
    const [result] = await pool.execute(`UPDATE solicitacao_adocao SET entrevista = ? WHERE id = ?`, [status, id]);
    return result.affectedRows
}

export async function repositoryDeletarSolicitacaoAdocaoPorId(id) {
  const [result] = await pool.execute(`DELETE FROM solicitacao_adocao WHERE id = ?`, [id]);
  return result.affectedRows 
};