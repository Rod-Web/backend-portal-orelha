import { normalizarDadosUsuario } from '../utils/normalizacoes/normalizarDadosUsuario.js';
import { idadeMinima } from '../utils/idadeMinima.js';
import { validarSenha } from '../utils/validacoes/validarSenha.js';

import { gerarHash } from "../utils/gerarHash.js";

import { repositoryBuscarAdminPorCampo, repositoryCadastrarAdmin } from '../repository/admin.js'

export async function serviceInserirAdmin(dados) {
  // NORMALIZAÇÂO
  dados = normalizarDadosUsuario(
    dados.cpf,
    dados.nome,
    dados.email,
    dados.senha
  );
  
  console.log("Validando dados do usuário...");

  // VALIDAR SE O CPF É UNICO
  let campo = "cpf"
  const cpf = dados.cpf
  let  usuario = await repositoryBuscarAdminPorCampo(campo, cpf)
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
  usuario = await repositoryBuscarAdminPorCampo(campo, email)
  if(usuario.length != 0) {
    const erro = new Error("Já existe um usuário com esse email");
    erro.status = 409
    throw erro
  }

  // VALIDAR SE A SENHA POSSUÍ OS CRITÉRIOS ESPECÍFICOS
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
    usuario: "admin",
    senha: senhaCriptografada
  };

  // ENVIAR AS INFORMAÇÕES PARA O BANCO DE DADOS
  const affectedRows = await repositoryCadastrarAdmin(user)

  // VALIDAR SE AS TABELAS SOFRERAM ALTERAÇÕES
  if(affectedRows.admin != 1){
    const erro = new Error("Não foi possivel cadastrar o administrador. Entre em contato com o suporte.")
    throw erro
  }

  // RETORNAR O USUÁRIO CADASTRADO
  return dados.nome
  
};
