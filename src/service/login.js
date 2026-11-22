import { repositoryBuscarAdminPorCampo } from "../repository/admin.js";
import { compararSenha } from "../utils/compararSenhaEncriptografa.js";
import {
  gerarAccessToken,
  gerarRefreshToken,
} from "../utils/tokens/gerarToken.js";

export async function serviceLogar(username, senha) {

  // Relatório de erros
  // -
  // -
  // -
  // Buscar se o username existe;
  let campo = "username";
  let usuario = await repositoryBuscarAdminPorCampo(campo, username);
  if (usuario.length !== 1) {
    const erro = new Error("Usuário ou senha incorreto.");
    erro.status = 401;
    throw erro;
  }

  // Encriptografar senha e comparar
  const senhaCriptografada = usuario[0].senha;
  const validarSenha = await compararSenha(senha, senhaCriptografada);

  if (!validarSenha) {
    const erro = new Error("Usuário ou senha incorreto.");
    erro.status = 401;
    throw erro;
  }

  // Gerar tokens
  const accessToken = gerarAccessToken(usuario[0].id, usuario[0].nome);
  const refreshToken = gerarRefreshToken(
    usuario[0].id,
    usuario[0].nome
  );

  // Retornar tokens
  return {
    tokens: {
      accessToken,
      refreshToken,
    },
    usuario: {
      nome: usuario[0].nome
    }
  };
}
