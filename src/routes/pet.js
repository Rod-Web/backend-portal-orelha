import express from 'express';

import { controllerSelecionarPets, controlllerInserirPet } from '../controller/pet.js'
import { validarAccessMiddlware } from '../middlwares/validacoes/dadosUsuario.js';
import { autenticar } from '../middlwares/autenticacao/autenticar.js';
import { confirmarPermissoesFuncionario } from '../middlwares/permissoes/permissaoFuncionario.js';
import { imagemUpload } from '../middlwares/validacoes/dados/global/img.js';
import { tratarErroUpload } from '../middlwares/validacoes/error/erroUpload.js';
import { dadosPet } from '../middlwares/validacoes/dadosPet.js';


export const route_pet = express.Router();

route_pet.get('/pet', controllerSelecionarPets);

route_pet.post(
    "/rotasprivadas/inserirPet", 
    validarAccessMiddlware,
    autenticar,
    confirmarPermissoesFuncionario,
    imagemUpload,
    tratarErroUpload,
    dadosPet,
    controlllerInserirPet
);