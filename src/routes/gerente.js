import express from 'express';
import { validarCookie } from '../middlwares/validacoes/dadosUsuario.js';
import { confirmarPermissoesGerente } from '../middlwares/autenticacao/permissoes.js';
import { dadosUsuario } from '../middlwares/validacoes/dadosUsuario.js';
import { controllerGerente } from '../controller/gerente.js'

export const route_gerente = express.Router();

route_gerente.post('/inserirFuncionario', validarCookie, confirmarPermissoesGerente, dadosUsuario, controllerGerente
    // middlwares de dados
)