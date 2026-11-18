import {
  serviceSelecionarInscricoesVoluntariados,
  serviceSelecionarInscricaoVoluntariadoPorId,
  serviceInserirInscricaoVoluntariado,
  serviceEditarStatusInscricaoVoluntariado,
  serviceDeletarInscricaoVoluntariadoPorId,
} from "../service/formulario-voluntariado.js";

export async function controllerSelecionarInscricoesVoluntariados(req, res, next) {
  try {
    const inscricoes = await serviceSelecionarInscricoesVoluntariados();
    return res.status(200).json(inscricoes);
  } catch (error) {
    next(error);
  }
};

export async function controllerSelecionarInscricaoVoluntariadoPorId(req, res, next) {
  try {
    const { id } = req.params;

    const inscricao = await serviceSelecionarInscricaoVoluntariadoPorId(id);
    res.status(200).json(inscricao);
  } catch (error) {
    next(error);
  }
}

export async function controllerInserirInscricaoVoluntariado(req, res, next) {
  try {
    const dados = {
      nome: req.body.nome_completo,
      idade: req.body.idade,
      email: req.body.email,
      endereco_residencial: req.body.endereco_residencial,
      telefone: req.body.telefone_contato,
      profissao: req.body.profissao_atual,
      dias_disponiveis: req.body.dias_disponiveis,
      periodos_disponiveis: req.body.periodos_disponiveis,
      disponibilidade_durante_jornada: req.body.disponibilidade_durante_jornada,
      experiencias_anteriores_trabalho_voluntario:
        req.body.experiencias_anteriores_trabalho_voluntario,
      possui_habilidade_relevante: req.body.possui_habilidade_relevante,
      possui_experiencia_animais: req.body.possui_experiencia_animais,
      ciente_atividades_responsabilidades:
        req.body.ciente_atividades_responsabilidades,
      concorda_orientacoes_regras_seguranca:
        req.body.concorda_orientacoes_regras_seguranca,
      motivacao_interesse: req.body.motivacao_interesse,
      id_oportunidade_voluntario: req.body.id_oportunidade_voluntario,
    };

    const resultado = await serviceInserirInscricaoVoluntariado(dados);
    return res.status(201).json(resultado);
  } catch (err) {
    next(err);
  }
}

export async function controllerEditarStatusInscricaoVoluntariado(req, res, next) {
  try {
    const {id} = req.params;

    const status = req.body.status.toUpperCase().trim();

    const edicao = await serviceEditarStatusInscricaoVoluntariado(id, status);
    res.status(200).json(edicao);
  } catch (err) {
    next(err)
  }
};

export async function controllerDeletarInscricaoVoluntariadoPorId(req, res, next) {
  try {
    const { id } = req.params;
    const inscricao = await serviceDeletarInscricaoVoluntariadoPorId(id);
    res.status(200).json(inscricao);
  } catch (error) {
    next(error);
  }
};