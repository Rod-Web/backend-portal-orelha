import express from 'express';

//Middlwares
import {dadosUsuario} from '../middlwares/validacoes/dadosUsuario.js'
import {dadosCliente} from '../middlwares/validacoes/dadosCliente.js'

//Controller
import { controllerInserirCliente } from '../controller/cliente.js';


export const route_cliente = express.Router();

route_cliente.post('/inserirCliente', dadosUsuario, dadosCliente, controllerInserirCliente);

/*
Usuário informa dados para cadastro
Rota envia para middlware que valida se todos os dados estão no formato correto
Se sim, envia para o Controller que chama o Service
Service conversa com a pasta API e valida se CEP é Ok
Se sim, valida as outras RN e envia para o Repository
    

*/