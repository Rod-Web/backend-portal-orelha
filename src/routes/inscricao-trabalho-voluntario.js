import express from 'express'
import { dadosInscricao } from '../middlwares/validacoes/dadosInscricao.js'

import {controllerIncluirInscricaoTrabalhoVoluntario} from '../controller/inscricao-trabalho-voluntario.js'
export const route_inscricao_trabalho_voluntario = express.Router()

route_inscricao_trabalho_voluntario.post('/inscricao-trabalho-voluntario',dadosInscricao, controllerIncluirInscricaoTrabalhoVoluntario 
)