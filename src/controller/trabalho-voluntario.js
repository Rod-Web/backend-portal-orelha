import {
  serviceSelecionarTrabalhosVoluntario,
  serviceSelecionarTrabalhoVoluntárioPorCampo,
  serviceSelecionarTrabalhoVoluntarioPorId,
  serviceInserirTrabalhoVoluntario,
  serviceEditarTrabalhoVoluntario,
  serviceDeletarTrabalhoVoluntarioPorId
} from "../service/trabalho-voluntario.js";

export async function controllerSelecionarTrabalhosVoluntario(req, res, next) {
  try {
    const oportunidades = await serviceSelecionarTrabalhosVoluntario();

    res.status(200).json(oportunidades);
  } catch (error) {
    next(error);
  }
}

export async function controllerSelecionarTrabalhoVoluntarioPorCampo(req, res, next) {
  try {
    const { campo, valor } = req.query;
    const oportunidades = await serviceSelecionarTrabalhoVoluntárioPorCampo(campo, valor);
    res.status(200).json(oportunidades);
  } catch (error) {
    next(error);
  }
}

export async function controllerSelecionarTrabalhosVoluntarioPorId(
  req,
  res,
  next,
) {
  try {
    const { id } = req.params;

    const oportunidade = await serviceSelecionarTrabalhoVoluntarioPorId(id);
    res.status(200).json(oportunidade);
  } catch (error) {
    next(error);
  }
}

export async function controllerInserirTrabalhoVoluntario(req, res, next) {
  try {
    const dados = {
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      local: req.body.local,
      data_inicio: req.body.data_inicio,
      jornada: req.body.jornada,
    };

    const tituloOportunidade = await serviceInserirTrabalhoVoluntario(dados);
    res.status(201).json({tituloOportunidade});

  } catch (error) {
    next(error);
  }
}

export async function controllerEditarTrabalhoVoluntario(req, res, next) {
  try {
    const { id } = req.params;
    const dados = {
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      local: req.body.local,
      data_inicio: req.body.data_inicio,
      jornada: req.body.jornada
    };

    const status = req.body.status.toUpperCase().trim();

    const tituloOportunidade = await serviceEditarTrabalhoVoluntario(id, dados, status);

    return res.status(200).json({ tituloOportunidade });
  } catch (err) {
    next(err);
  }
}


export async function controllerDeletarTrabalhoVoluntarioPorId(req, res, next) {
  try {
    const { id } = req.params;
    const oportunidadeTitulo = await serviceDeletarTrabalhoVoluntarioPorId(id);
    res.status(200).json(oportunidadeTitulo);
  } catch (error) {
    next(error);
  };
};
