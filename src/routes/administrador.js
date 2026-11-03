import express from 'express';
import { validarAccessMiddlware } from '../middlwares/validacoes/dadosUsuario.js';
import { autenticar } from '../middlwares/autenticacao/autenticar.js';
import { confirmarPermissoesAdmin } from '../middlwares/permissoes/permissaoAdmin.js';
import { dadosUsuario } from '../middlwares/validacoes/dadosUsuario.js';
import { controllerInserirAdmin } from '../controller/admin.js'

export const route_administrador = express.Router();

route_administrador.post('/inserirAdmin', validarAccessMiddlware, autenticar, confirmarPermissoesAdmin, dadosUsuario, controllerInserirAdmin
);