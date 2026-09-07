import express from 'express';

import { validarCookie } from '../middlwares/validacoes/dadosUsuario.js';
import {autenticarMe} from '../middlwares/autenticacao/me.js'

export const route_authMe = express.Router();

route_authMe.get('/me', validarCookie, autenticarMe
    // validar o token
    //
);