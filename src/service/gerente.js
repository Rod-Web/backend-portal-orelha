import { normalizarDadosUsuario } from '../utils/normalizacoes/normalizarDadosUsuario.js';
import { idadeMinima } from '../utils/idadeMinima.js';
import { validarSenha } from '../utils/validacoes/validarSenha.js';

import { gerarHash } from "../utils/gerarHash.js";

import { repositoryBuscarUsuarioPorCampo } from '../repository/usuario.js';
import {repositoryCadastrarFuncionario} from '../repository/funcionario.js'

export async function serviceInserirFuncionario(dados) {
  // NORMALIZAÇÂO
  dados = normalizarDadosUsuario(
    dados.cpf,
    dados.nome,
    dados.idade,
    dados.email,
    dados.senha,
    dados.telefone
  );
  
  // VALIDAR SE O CPF É UNICO
  let campo = "cpf"
  const cpf = dados.cpf
  let  usuario = await repositoryBuscarUsuarioPorCampo(campo, cpf)
  if(usuario.length != 0) {
    const erro = new Error("Já existe um usuário com esse CPF");
    erro.status = 409
    throw erro
  }

  // VALIDAR SE A IDADE É >= 18
  if(idadeMinima(dados.idade)) {
    const erro = new Error(idadeMinima(dados.idade));
    erro.status = 422
    throw erro
  }

  // VALIDAR SE O EMAIL É UNICO
  campo = "email"
  const email = dados.email
  usuario = await repositoryBuscarUsuarioPorCampo(campo, email)
  if(usuario.length != 0) {
    const erro = new Error("Já existe um usuário com esse email");
    erro.status = 409
    throw erro
  }

  // VALIDAR SE O TELEFONE É UNICO
  campo = "telefone"
  const telefone = dados.telefone
  usuario = await repositoryBuscarUsuarioPorCampo(campo, telefone)
  if(usuario.length != 0) {
    const erro = new Error("Já existe um usuário com esse telefone");
    erro.status = 409
    throw erro
  }

  // VALIDAR SE A SENHA POSSUÍ OS CRITÉRIOS ESPECÍFICOS
  console.log(dados.senha)
  if (validarSenha(dados.senha)) {
    const erro = new Error(validarSenha(dados.senha));
    erro.status = 422;
    throw erro;
  }

  // CRIPTOGRAFAR SENHA
  const senhaCriptografada = await gerarHash(dados.senha)
  
  // JUNTAR INFORMAÇÕES DO USUÁRIO
  const user = {
    infosUser: dados,
    usuario: "funcionario",
    senha: senhaCriptografada
  };

  // ENVIAR AS INFORMAÇÕES PARA O BANCO DE DADOS
  const affectedRows = await repositoryCadastrarFuncionario(user)

  // VALIDAR SE AS TABELAS SOFRERAM ALTERAÇÕES
  if(affectedRows.funcionario != 1 || affectedRows.usuario != 1){
    const erro = new Error("Não foi possivel cadastrar o usuário. Entre em contato com o suporte.")

    throw erro
  }

  // RETORNAR O USUÁRIO CADASTRADO
  return dados.nome
  
};
