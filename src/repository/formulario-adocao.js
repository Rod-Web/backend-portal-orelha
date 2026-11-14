
import { pool } from "../config/conexao.js";

export async function repositoryInserirSolicitacaoDeAdocao(dados) {

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
            id_pet
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
        id_pet
    ];

    const [result] = await pool.execute(query, values);

    return result.affectedRows;
}
