import express from 'express';

import { validarAccessMiddlware } from '../middlwares/validacoes/dadosUsuario.js';
import { autenticar } from '../middlwares/autenticacao/autenticar.js'
import { controllerTipoUsuario } from '../controller/autenticar.js';

export const route_authMe = express.Router();

route_authMe.get(
  "/me",
  validarAccessMiddlware,
  autenticar,
  controllerTipoUsuario,
);