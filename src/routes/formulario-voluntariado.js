import express from 'express'
import { dadosInscricaoVoluntariado } from '../middlwares/validacoes/dadosInscricaoVoluntariado.js'

import {controllerInserirInscricaoVoluntariado} from '../controller/formulario-voluntariado.js'
export const route_formularioVoluntariado = express.Router()

route_formularioVoluntariado.post(
  "/inscricao-trabalho-voluntario",
  dadosInscricaoVoluntariado,
  controllerInserirInscricaoVoluntariado,
);