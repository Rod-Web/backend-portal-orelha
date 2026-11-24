import { serviceSelecionarPetsPorCampo } from "./pet.js";
import { buscarInfosViaCep } from "../APIs/buscarInfosViaCep.js";

import {
  repositorySelecionarSolicitacoesAdocao,
  repositoryBuscarSolicitacaoAdocaoPorId,
  repositoryInserirSolicitacaoDeAdocao,
  repositoryEditarStatusSolicitacaoAdocao,
  repositoryEditarEntrevistaSolicitacaoAdocao,
  repositoryDeletarSolicitacaoAdocaoPorId,
} from "../repository/formulario-adocao.js";

export async function serviceSelecionarSolicitacoesAdocao() {
    const allSolicitacoes = await repositorySelecionarSolicitacoesAdocao();
    if(!allSolicitacoes || allSolicitacoes.length === 0) {
        const erro = new Error("Nenhuma solicitação encontrada.");
        erro.status = 404;
        throw erro;
    };
    return allSolicitacoes;
};

export async function serviceSelecionarSolicitacaoAdocaoPorId(id) {
  const [solicitacao] = await repositoryBuscarSolicitacaoAdocaoPorId(id);
  if (!solicitacao || solicitacao.length === 0) {
    const erro = new Error("Nenhuma solicitacao de adoção encontrado.");
    erro.status = 404;
    throw erro;
  }
  return solicitacao;
}

export async function serviceInserirSolicitacaoAdocao(dados) {
  // ─── Validações básicas ──────────────────────────────
  if (
    dados.compromisso_adocao_responsavel !== true ||
    dados.familia_ciente_concorda !== true
  ) {
    const erro = new Error(
      "Não foi possível prosseguir com a solicitação de adoção. Para garantir o bem-estar do animal, é necessário que você e sua família estejam cientes e de acordo com as responsabilidades envolvidas na adoção.",
    );
    erro.status = 422;
    throw erro;
  }

  // 🔴 NOVO: idade mínima
  if (!Number.isInteger(dados.idade) || dados.idade < 18 || dados.idade > 120) {
    const erro = new Error("Para adotar, é necessário ter pelo menos 18 anos.");
    erro.status = 400;
    throw erro;
  }

  // ─── Normalização condicional ───────────────────────
  if (dados.possui_outros_animais !== true) {
    dados.descricao_animais_existentes = null;
    dados.racao_atual = null;
    dados.veterinario_responsavel = null;
  }

  if (dados.animais_anteriores !== true) {
    dados.descricao_animais_anteriores = null;
  }

  // ─── Validações condicionais ────────────────────────
  if (dados.possui_outros_animais === true) {
    if (
      !dados.descricao_animais_existentes ||
      !dados.racao_atual ||
      !dados.veterinario_responsavel
    ) {
      const erro = new Error(
        "Está faltando o campo da descrição do seu pet atual, da ração ou do veterinário.",
      );
      erro.status = 400;
      throw erro;
    }
  }

  if (dados.animais_anteriores === true) {
    if (!dados.descricao_animais_anteriores) {
      const erro = new Error(
        "Está faltando o campo da descrição do seu pet antigo.",
      );
      erro.status = 400;
      throw erro;
    }
  }

  // ─── Verifica se o pet existe ───────────────────────
  const [pet] = await serviceSelecionarPetsPorCampo(
    "numero_identificacao",
    dados.id_pet,
  );

  if (!pet) {
    const erro = new Error("Pet não encontrado.");
    erro.status = 404;
    throw erro;
  }

  if (pet.status !== "DISPONIVEL") {
    const erro = new Error("Este pet não está mais disponível para adoção.");
    erro.status = 409;
    throw erro;
  }

  // ─── Valida CEP ─────────────────────────────────────
  const cepinfos = await buscarInfosViaCep(dados.cep);
  if (cepinfos.erro) {
    const erro = new Error("O CEP informado não existe.");
    erro.status = 400;
    throw erro;
  }

  // ─── Insere (transação atômica no repository) ───────
  const affectedRows = await repositoryInserirSolicitacaoDeAdocao(dados);

  // affectedRows === 0 → pet foi reservado por outra pessoa entre o SELECT e o UPDATE
  if (affectedRows !== 1) {
    const erro = new Error(
      "Este pet acabou de ser reservado por outra pessoa. Tente novamente com outro pet.",
    );
    erro.status = 409;
    throw erro;
  }

  return {
    mensagem: `Sua solicitação foi realizada com sucesso. Aguarde o contato da ONG.`,
  };
}

export async function serviceEditarStatusSolicitacaoAdocao(id, status) {
  await serviceSelecionarSolicitacaoAdocaoPorId(id);

    const affectedRows = await repositoryEditarStatusSolicitacaoAdocao(id, status);
    if (affectedRows !== 1) {
      const erro = new Error(
        "Não foi possível editar o status da solicitação. Tente novamente ou entre em contato com o suporte.",
      );
      throw erro;
    }

  return {message: "Sucesso! Status alterado."}
  
}

export async function serviceEditarEntrevistaSolicitacaoAdocao(id, entrevista) {
  await serviceSelecionarSolicitacaoAdocaoPorId(id);

    const affectedRows = await repositoryEditarEntrevistaSolicitacaoAdocao(id, entrevista);
    if (affectedRows !== 1) {
      const erro = new Error(
        "Não foi possível editar o estado da entrevista da solicitação. Tente novamente ou entre em contato com o suporte.",
      );
      throw erro;
    }

  return {message: "Sucesso! O estado da entrevista foi atualizado com sucesso."}
  
}


export async function serviceDeletarSolicitacaoAdocaoPorId(id) {

  const solicitacao = await repositoryBuscarSolicitacaoAdocaoPorId(id);
  if (solicitacao.length !== 1) {
    const erro = new Error("Solicitação de adoção não encontrada.");
    erro.status = 404;
    throw erro;
  }

  const affectedRows = await repositoryDeletarSolicitacaoAdocaoPorId(id);

  if (affectedRows !== 1) {
    throw new Error(
      "Não foi possível excluir a solicitação de adoção. Tente novamente ou entre em contato com o suporte.",
    );
  }
  return {
    mensagem: `Solicitação requisitada pelo: '${solicitacao[0].nome_completo}' excluída com sucesso.`,
  };
}