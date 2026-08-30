import {normalizarCPF} from '../utils/normalizarCPF.js'
import { idadeMinima } from '../utils/idadeMinima.js';

import {repositoryBuscarClientePorCampo} from '../repository/cliente.js'

export async function serviceInserirCliente(dados) {
  
  if(normalizarCPF(dados.cpf)) {
    const erro = new Error = normalizarCPF(dados.cpf);
    erro.status = 400
    throw erro   
  }
  // RN do CPF PASSOU
  
  if(idadeMinima(dados.idade)) {
    const erro = new Error = idadeMinima(dados.idade);
    erro.idade = 400
    throw erro
  }
  // RN da Idade Passou

  // PRECISAMOS VALIDAR SE O EMAIL É UNICO
  let campo = "email"
  const email = dados.email
  let usuario = await repositoryBuscarClientePorCampo(campo, email)
  if(usuario) {
    const erro = new Error = "Já existe um usuário com esse email";
    erro.status = 409
    throw erro
  }
  // RN de email passou

  // PRECISAMOS VALIDAR SE O NUMERO É UNICO
  campo = "telefone"
  const telefone = dados.telefone
  usuario = await repositoryBuscarClientePorCampo(campo, telefone)
  if(usuario) {
    const erro = new Error = "Já existe um usuário com esse telefone";
    erro.status = 409
    throw erro
  }
  // RN do telefone passou

  // RN do cep 

  // RN do numero de residencia

  // RN da senha

  // 

  // Pegar dataAtual


  // Validar se o usuário existe via CPF

  // Montar escorpo dos dados

  // Mandar pro repository
};