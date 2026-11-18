import { serviceSelecionarTrabalhoVoluntarioPorCampo } from "./trabalho-voluntario.js";

import {
  repositorySelecionarInscricoesVoluntariados,
  repositoryBuscarInscricaoVoluntariadoPorId,
  repositoryInserirInscricaoVoluntariado,
  repositoryEditarStatusInscricaoVoluntariado,
  repositoryDeletarInscricaoVoluntariadoPorId,
} from "../repository/formulario-voluntariado.js";


export async function serviceSelecionarInscricoesVoluntariados() {
  const allInscricoes = await repositorySelecionarInscricoesVoluntariados();
  if (!allInscricoes || allInscricoes.length === 0) {
    const erro = new Error("Nenhuma inscrição encontrada.");
    erro.status = 404;
    throw erro;
  }
  return allInscricoes;
};

export async function serviceSelecionarInscricaoVoluntariadoPorId(id) {
    const [inscricao] = await repositoryBuscarInscricaoVoluntariadoPorId(id);
    if (!inscricao || inscricao.length === 0) {
        const erro = new Error("Nenhuma inscrição em trabalho voluntário encontrada.");
        erro.status = 404;
        throw erro;
    }
    return inscricao;
}

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

export async function serviceEditarStatusInscricaoVoluntariado(id, status) {
  await serviceSelecionarInscricaoVoluntariadoPorId(id);

    const affectedRows = await repositoryEditarStatusInscricaoVoluntariado(id, status);
    if (affectedRows !== 1) {
      const erro = new Error(
        "Não foi possível editar o status da inscrição. Tente novamente ou entre em contato com o suporte.",
      );
      throw erro;
    }

  return {message: "Sucesso! Status alterado."}
  
}

export async function serviceDeletarInscricaoVoluntariadoPorId(id) {
  const inscricao = await repositoryBuscarInscricaoVoluntariadoPorId(id);
  if (inscricao.length !== 1) {
    const erro = new Error("Inscrição de trabalho voluntário não encontrada.");
    erro.status = 404;
    throw erro;
  }

  const affectedRows = await repositoryDeletarInscricaoVoluntariadoPorId(id);

  if (affectedRows !== 1) {
    throw new Error(
      "Não foi possível excluir a inscrição do voluntário. Tente novamente ou entre em contato com o suporte.",
    );
  }
  return {
    mensagem: `Inscrição realizada pelo: '${inscricao[0].nome_completo}' excluída com sucesso.`,
  };
}