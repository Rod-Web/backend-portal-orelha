import express from 'express';
import { validarCookie } from '../middlwares/validacoes/dadosGerente.js';
// import { confirmarPermissoes } from '../middlwares/autenticacao/permmissoes.js'

export const route_gerente = express.Router();

route_gerente.post('/inserirFuncionario', validarCookie, // confirmarPermissoes
    // validação de token
    // middlwares de dados
)