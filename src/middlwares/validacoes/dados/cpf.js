import {validarCPFMatematicamente} from '../../../utils/validacoes/validacaoCPFMatematicamente.js'

export function validarCPF(cpf) {

  cpf = cpf.trim();

  // Validar se existe
  if (!cpf) return "O CPF não foi informado";

  // Validar se é string
  if (typeof cpf !== "string") return "O CPF precisa ser uma string.";

  // Validar se só contem números, hífen e ponto
  if(!/^[\d.-]+$/.test(cpf)) return "O CPF só pode conter números"

  cpf = cpf.replace(/\D/g, "");
  // Validar o tamanho sem ponto e hífen
  if(cpf.length != 11) return "CPF precisa ter exatamente 11 dígitos";

  const resp = validarCPFMatematicamente(cpf)
  if(resp) return resp

  return null;
};
