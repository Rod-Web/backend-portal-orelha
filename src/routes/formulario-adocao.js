import express from 'express'

import { dadosSolicitacaoAdocao } from '../middlwares/validacoes/dadosSolicitacaoAdocao.js'
import { controllerInserirSolicitacaoAdocao } from "../controller/formulario-adocao.js";

export const route_formularioAdocao = express.Router()

route_formularioAdocao.post(
  "/solicitacao-adocao",
  dadosSolicitacaoAdocao,
  controllerInserirSolicitacaoAdocao,
);