import express from 'express'

import { dadosInscricaoVoluntariado } from '../middlwares/validacoes/dadosInscricaoVoluntariado.js'
import { validarIdGeral } from "../middlwares/validacoes/dadosTrabalhoVoluntario.js";
import { validarStatusForms } from '../middlwares/validacoes/dadosForms.js';

import { validarAccessMiddlware } from '../middlwares/validacoes/dadosUsuario.js';
import { autenticar } from '../middlwares/autenticacao/autenticar.js';
import { confirmarPermissoesAdmin } from '../middlwares/permissoes/permissaoAdmin.js';

import {
  controllerSelecionarInscricoesVoluntariados,
  controllerSelecionarInscricaoVoluntariadoPorId,
  controllerInserirInscricaoVoluntariado,
  controllerEditarStatusInscricaoVoluntariado,
  controllerDeletarInscricaoVoluntariadoPorId
} from "../controller/formulario-voluntariado.js";

export const route_formularioVoluntariado = express.Router()

route_formularioVoluntariado.get(
  "/rotasprivadas/inscricoes-voluntariados",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  controllerSelecionarInscricoesVoluntariados,
);

route_formularioVoluntariado.get(
  "/rotasprivadas/inscricao-voluntariado/:id",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  validarIdGeral,
  controllerSelecionarInscricaoVoluntariadoPorId,
);


route_formularioVoluntariado.post(
  "/inscricao-trabalho-voluntario",
  dadosInscricaoVoluntariado,
  controllerInserirInscricaoVoluntariado,
);


route_formularioVoluntariado.patch(
  "/rotasprivadas/editarStatusInscricao/:id",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  validarIdGeral,
  validarStatusForms, 
  controllerEditarStatusInscricaoVoluntariado
);

route_formularioVoluntariado.delete(
  "/rotasprivadas/deletarInscricaoVoluntariado/:id",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  validarIdGeral,
  controllerDeletarInscricaoVoluntariadoPorId,
);
