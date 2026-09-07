import { normalizarDadosUsuario } from "./normalizarDadosUsuario.js";

export function normalizarDadosCliente(
  cpfDesnormalizado,
  nomeDesnormalizado,
  idadeDesnormalizado,
  emailDesnormalizado,
  senhaDesnormalizado,
  telefoneDesnormalizado,
  cep,
  numero,
) {
  //NORMALIZAÇÃO
  const { cpf, nome, idade, email, senha, telefone } = normalizarDadosUsuario(
    cpfDesnormalizado,
    nomeDesnormalizado,
    idadeDesnormalizado,
    emailDesnormalizado,
    senhaDesnormalizado,
    telefoneDesnormalizado,
  );

  cep = cep.trim().replace(/\D/g, "");

  numero = numero.trim();

  return {
    cpf,
    nome,
    idade,
    email,
    senha,
    telefone,
    endereco: {
      cep,
      numero,
    },
  };
}
