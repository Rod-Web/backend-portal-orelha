import express from 'express';
import { validarAccessMiddlware } from '../middlwares/validacoes/dadosUsuario.js';
import { autenticar } from '../middlwares/autenticacao/autenticar.js';
import { confirmarPermissoesGerente } from '../middlwares/permissoes/permissaoGerente.js';
import { dadosUsuario } from '../middlwares/validacoes/dadosUsuario.js';
import { controllerGerente } from '../controller/gerente.js'

export const route_gerente = express.Router();

route_gerente.post('/inserirFuncionario', validarAccessMiddlware, autenticar, confirmarPermissoesGerente, dadosUsuario, controllerGerente
)