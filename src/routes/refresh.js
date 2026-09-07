import express from 'express';

import { dadosRefresh } from "../middlwares/validacoes/dadosRefresh.js";

import { controllerRefresh } from '../controller/refresh.js'

export const route_refresh = express.Router();

route_refresh.post("/refresh", dadosRefresh, controllerRefresh);