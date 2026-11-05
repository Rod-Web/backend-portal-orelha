import {
  repositoryBuscarTrabalhosVoluntario,
  repositoryBuscarTrabalhoVoluntarioPorCampo,
  repositoryBuscarTrabalhoVoluntarioPorId,
  repositoryCadastrarTrabalhoVoluntario,
  repositoryDeletarTrabalhoVoluntarioPorId,
} from "../repository/trabalho-voluntario.js";

export async function serviceSelecionarTrabalhosVoluntario() {

    const todosTrabalhos = await repositoryBuscarTrabalhosVoluntario();

    if (!todosTrabalhos || todosTrabalhos.length === 0) {
        const erro = new Error("Nenhum trabalho voluntário encontrado.");
        erro.status = 404;
        throw erro; 
    };

    return todosTrabalhos;
};

export async function serviceSelecionarTrabalhoVoluntárioPorCampo(campo, valor) {

    const oportunidades = await repositoryBuscarTrabalhoVoluntarioPorCampo(campo, valor);
    if (!oportunidades || oportunidades.length === 0) {
        const erro = new Error("Nenhum trabalho encontrado.");
        erro.status = 404;
        throw erro;
    }
    return oportunidades;
};


export async function serviceSelecionarTrabalhoVoluntarioPorId(id) {
    
    const [trabalho] = await repositoryBuscarTrabalhoVoluntarioPorId(id);
    if(!trabalho || trabalho.length === 0) {
        const erro = new Error("Nenhum trabalho voluntário encontrado.");
        erro.status = 404;
        throw erro;
    };
    return trabalho;
    
};

export async function serviceInserirTrabalhoVoluntario(dados) {
  dados.status = "ABERTA";
  const affectedRows = await repositoryCadastrarTrabalhoVoluntario(dados);
  // VALIDAR SE AS TABELAS SOFRERAM ALTERAÇÕES
  if (affectedRows != 1) {
    const erro = new Error(
      "Não foi possivel cadastrar o trabalho voluntário. Entre em contato com o suporte.",
    );
    throw erro;
  }

  return dados.titulo;
}

export async function serviceDeletarTrabalhoVoluntarioPorId(id) {

  const servico = await repositoryBuscarTrabalhoVoluntarioPorCampo("id", id);
  if (servico.length !== 1) {
    const erro = new Error("Serviço Voluntário não encontrado.");
    erro.status = 404;
    throw erro;
  }

  const affectedRows = await repositoryDeletarTrabalhoVoluntarioPorId(id);

  if (affectedRows !== 1) {
    throw new Error(
      "Não foi possível excluir o trabalho voluntário. Tente novamente ou entre em contato com o suporte.",
    );
  }
  return {
    mensagem: `Trabalho Voluntário: '${servico[0].titulo}' excluído com sucesso.`,
  };
}