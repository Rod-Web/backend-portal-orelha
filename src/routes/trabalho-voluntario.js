import express from "express";
import {
  controllerSelecionarTrabalhosVoluntario,
  controllerSelecionarTrabalhoVoluntarioPorCampo,
  controllerSelecionarTrabalhosVoluntarioPorId,
  controllerInserirTrabalhoVoluntario,
  controllerDeletarTrabalhoVoluntarioPorId
} from "../controller/trabalho-voluntario.js";
import {
  validarCampoEValorDeBuscarTrabalhoVoluntario,
  validarIdGeral,
  dadosTrabalhoVoluntario,
} from "../middlwares/validacoes/dadosTrabalhoVoluntario.js";
import { validarAccessMiddlware } from "../middlwares/validacoes/dadosUsuario.js";
import { autenticar } from "../middlwares/autenticacao/autenticar.js";
import { confirmarPermissoesAdmin } from "../middlwares/permissoes/permissaoAdmin.js";

export const route_oportunidade = express.Router();

route_oportunidade.get(
  "/trabalhos-voluntario",
  controllerSelecionarTrabalhosVoluntario,
);

route_oportunidade.get(
  "/trabalho-voluntario/buscar", // req.query = campo e valor
  validarCampoEValorDeBuscarTrabalhoVoluntario,
  controllerSelecionarTrabalhoVoluntarioPorCampo,
);

route_oportunidade.get(
  "/trabalho-voluntario/:id",
  validarIdGeral,
  controllerSelecionarTrabalhosVoluntarioPorId,
);

route_oportunidade.post(
  "/rotasprivadas/inserirTrabalhoVoluntario",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  dadosTrabalhoVoluntario,
  controllerInserirTrabalhoVoluntario,
);

route_oportunidade.delete(
  "/rotasprivadas/trabalho-voluntario/:id",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  validarIdGeral,
  controllerDeletarTrabalhoVoluntarioPorId
);
