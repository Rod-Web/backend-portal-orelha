import { validarId } from "./dados/global/id.js";
import {validarTitulo} from './dados/trabalho-voluntario/titulo.js';
import { validarDescricao } from "./dados/global/descricao.js";
import { validarLocal } from "./dados/trabalho-voluntario/local.js";
import { validarDataInicio } from "./dados/trabalho-voluntario/dataInicio.js" 
import { validarJornada } from "./dados/trabalho-voluntario/jornada.js";

import { validarStatus } from "./dados/trabalho-voluntario/status.js";
export function validarIdGeral(req, res, next) {
  const { id } = req.params;

  const erro = validarId(id);

 if (erro) return res.status(400).json({ erro });

  next();
}


export function dadosTrabalhoVoluntario(req, res, next) {

  if (!req.body) {
    return res.status(400).json({
      erro: "O corpo da requisição não foi informado.",
    });
  }
  
  const dados = {
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    local: req.body.local,
    data_inicio: req.body.data_inicio,
    jornada: req.body.jornada
  };


  const erro =
    validarTitulo(dados.titulo) ||
    validarDescricao(dados.descricao) ||
    validarLocal(dados.local) ||
    validarDataInicio(dados.data_inicio);
    validarJornada(dados.jornada);

  if (erro) {
    console.log("Erro de validação:", erro);
    return res.status(400).json({ erro });
  }

  next();
}

import { validarCampoTrabalho } from "./dados/trabalho-voluntario/campoBuscarTrabalho.js";
import { validarValor } from "./dados/global/valorBusca.js";

export function validarCampoEValorDeBuscarTrabalhoVoluntario(req, res, next) {

  if (!req.query) return res.status(400).json({erro: "Os parametros de busca não foi informado.",});
  
  const { campo, valor } = req.query;
  const erro = validarCampoTrabalho(campo) || validarValor(valor);

  if (erro) {
    return res.status(400).json({ erro });
  }

  next();
}

export function validarStatusTrabalhoVoluntario(req, res, next) {
  
  const { status } = req.body;

  const erro = validarStatus(status);

  if (erro) return res.status(400).json({ erro });

  next();
};