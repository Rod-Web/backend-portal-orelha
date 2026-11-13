import express from 'express'
import { dadosSolicitacao } from '../middlwares/validacoes/dadosSolicitacao.js'

import {controllerIncluirSolicitacaoAdocao} from '../controller/solicitar-adocao.js'
export const route_solicitarAdocao = express.Router()

route_solicitarAdocao.post('/solicitarAdocao',dadosSolicitacao, controllerIncluirSolicitacaoAdocao 
)