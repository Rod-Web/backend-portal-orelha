
import express from "express";

import {dadosLogin} from '../middlwares/validacoes/dadosLogin.js'

export const route_login = express.Router();

route_login.post('/', dadosLogin)