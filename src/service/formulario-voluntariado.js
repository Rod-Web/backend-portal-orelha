import { serviceSelecionarTrabalhoVoluntarioPorCampo } from "./trabalho-voluntario.js";

import { repositoryInserirInscricaoVoluntariado } from "../repository/formulario-voluntariado.js";

export async function serviceInserirInscricaoVoluntariado(dados) {

    if (dados.concorda_orientacoes_regras_seguranca !== true || dados.ciente_atividades_responsabilidades !== true) {
        const erro = new Error(
            "Não foi possível prosseguir com a sua inscrição para trabalho voluntário, é necessário que você esteja ciente das suas atividades e responsabilidades na ong e concorde com as orientações e regras de segurança.",
        );
        erro.status = 422
        throw erro;
    }

    const [oportunidade] = await serviceSelecionarTrabalhoVoluntarioPorCampo(
        "id",
        dados.id_oportunidade_voluntario,
    );

    if (oportunidade.status !== "ABERTA") {
        const erro = new Error("Oportunidade não disponível");
        erro.status = 404;
        throw erro;
    }

    const affectedRows = await repositoryInserirInscricaoVoluntariado(dados);
    // VALIDAR SE AS TABELAS SOFRERAM ALTERAÇÕES
    if (affectedRows != 1) {
        const erro = new Error(
            "Não foi possivel realizar sua inscrição. Tente novamente mais tarde ou entre em contato com o suporte.",
        );
        throw erro;
    }

    return { mensagem: `Sua inscricao foi realizada com sucesso, aguarde pelo contato da ONG.` };

}