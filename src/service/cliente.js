import {normalizarCPF, validarCPF} from '../utils/normalizacao/RN-CPF.js'
import { normalizarNome } from '../utils/normalizacao/RN-nome.js';
import { normalizarEmail } from '../utils/normalizacao/RN-email.js';
import { normalizarTelefone } from '../utils/normalizacao/RN-telefone.js';
import { normalizarNumero } from '../utils/normalizacao/RN-numero.js';
import { normalizarCEP } from '../utils/normalizacao/RN-CEP.js';

import { idadeMinima } from '../utils/idadeMinima.js';
import { validarSenha } from '../utils/validarSenha.js';
import { gerarHash } from '../utils/gerarHash.js';

import { buscarInfosViaCep } from '../APIs/buscarInfosViaCep.js';

import {repositoryBuscarUsuarioPorCampo, repositoryCadastrarCliente} from '../repository/cliente.js'

export async function serviceInserirCliente(dados) {
  dados.cpf = normalizarCPF(dados.cpf)
  dados.nome = normalizarNome(dados.nome)
  dados.email = normalizarEmail(dados.email)
  dados.telefone = normalizarTelefone(dados.telefone)
  dados.endereco.cep = normalizarCEP(dados.endereco.cep)
  dados.endereco.numero = normalizarNumero(dados.endereco.numero)



  const erroCPF = validarCPF(dados.cpf)
  if(erroCPF) {
    const erro = new Error(erroCPF);
    erro.status = 400
    throw erro
  }

  let campo = "cpf"
  const cpf = dados.cpf
  let  usuario = await repositoryBuscarUsuarioPorCampo(campo, cpf)
  if(usuario.length != 0) {
    const erro = new Error("Já existe um usuário com esse CPF");
    erro.status = 409
    throw erro
  }
  // RN do CPF PASSOU
  
  if(idadeMinima(dados.idade)) {
    const erro = new Error(idadeMinima(dados.idade));
    erro.idade = 400
    throw erro
  }
  // RN da Idade Passou

  // PRECISAMOS VALIDAR SE O EMAIL É UNICO
  campo = "email"
  const email = dados.email
  usuario = await repositoryBuscarUsuarioPorCampo(campo, email)
  if(usuario.length != 0) {
    const erro = new Error("Já existe um usuário com esse email");
    erro.status = 409
    throw erro
  }
  // RN de email passou

  // PRECISAMOS VALIDAR SE O NUMERO É UNICO
  campo = "telefone"
  const telefone = dados.telefone
  usuario = await repositoryBuscarUsuarioPorCampo(campo, telefone)
  if(usuario.length != 0) {
    const erro = new Error("Já existe um usuário com esse telefone");
    erro.status = 409
    throw erro
  }
  // RN do telefone passou

  // RN do cep 

  const cepinfos = await buscarInfosViaCep(dados.endereco.cep)
  if(cepinfos.erro){
    const erro = new Error("O CEP informado não existe")
    erro.status = 400
    throw erro
  }
  
  const {logradouro, bairro, cep, estado, localidade: cidade} = cepinfos

  // RN da senha
  if (validarSenha(dados.senha)) {
    const erro = new Error(validarSenha(dados.senha));
    erro.status = 400;
    throw erro;
  }

  const senhaCriptografada = await gerarHash(dados.senha)
  
  const user = {
    infosUser: dados,
    usuario: "cliente",
    senha: senhaCriptografada,
    endereco: [logradouro, bairro, estado, cidade]
  };

  console.log(user)
  
  const affectedRows = await repositoryCadastrarCliente(user)

  if(affectedRows.cliente != 1 || affectedRows.endereco != 1 || affectedRows.usuario != 1){
    const erro = new Error("Não foi possivel cadastrar o usuário. Entre em contato com o suporte.")

    throw erro
  }

  return dados.nome
  

  
  // Mandar pro repository
};
