import express from 'express';

import { controllerSelecionarPets, controllerInserirPet, controllerSelecionarPetsPorCampo, controllerSelecionarPetsPorId, controllerEditarPet, controllerDeletarPetsPorId} from '../controller/pet.js'
import { validarAccessMiddlware } from '../middlwares/validacoes/dadosUsuario.js';
import { autenticar } from '../middlwares/autenticacao/autenticar.js';
import { confirmarPermissoesAdmin } from '../middlwares/permissoes/permissaoAdmin.js';
import { uploadImagem } from '../middlwares/validacoes/dados/global/img.js';
import {
  dadosPet,
  validarCampoEValorDeBuscaPet,
  validarIdPet,
  validarStatusPet,
} from "../middlwares/validacoes/dadosPet.js";
import { verificarImagem } from '../middlwares/validacoes/verificadorImagem.js';


export const route_pet = express.Router();

route_pet.get('/pet', controllerSelecionarPets);

route_pet.get(
  "/pet/buscar",
  validarCampoEValorDeBuscaPet,
  controllerSelecionarPetsPorCampo,
);

route_pet.get('/pet/:id', validarIdPet, controllerSelecionarPetsPorId);


route_pet.post(
  "/rotasprivadas/inserirPet",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  uploadImagem,
  verificarImagem,
  dadosPet,
  controllerInserirPet,
);


//editar
route_pet.put(
  "/rotasprivadas/pet/:id",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  validarIdPet,
  uploadImagem,
  verificarImagem,
  dadosPet,
  validarStatusPet,
  controllerEditarPet,
);


route_pet.delete(
  "/rotasprivadas/pet/:id",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  validarIdPet,
  controllerDeletarPetsPorId,
);
