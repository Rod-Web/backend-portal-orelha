import { validarNome } from "./dados/global/nome.js";
import { validarIdade } from "./dados/pessoa/idade.js";
import { validarEmail } from "./dados/pessoa/email.js";
//import { validarEndereco } from "./dados/endereco/enderecoCompleto.js"
import { validarTelefone } from "./dados/pessoa/telefone.js"
import { validarProfissao } from "./dados/pessoa/profissão.js";
import { validarCienteAtividadesResponsabilidades } from "./dados/inscricaoTrabalhoVoluntario/ciente_atividades_responsabilidades .js";
import { validarConcordaOrientacoesRegrasSeguranca } from "./dados/inscricaoTrabalhoVoluntario/concorda_orientacoes_regras_seguranca.js";
import { validarDiasDisponiveis } from "./dados/inscricaoTrabalhoVoluntario/dias_disponiveis.js";
import {validarDisponibilidadeDuranteJornada} from "./dados/inscricaoTrabalhoVoluntario/disponibilidade_durante_jornada.js"
import { validarExperienciasAnterioresTrabalhoVoluntario } from "./dados/inscricaoTrabalhoVoluntario/experiencias_anteriores_trabalho_voluntario.js"
import { validarId } from "./dados/global/id.js"
import { validarMotivacaoInteresse } from "./dados/inscricaoTrabalhoVoluntario/motivacao_interesse.js"
import { validarPeriodosDisponiveis } from "./dados/inscricaoTrabalhoVoluntario/periodos_disponiveis.js"
import { validarPossuiExperienciaAnimais } from "./dados/inscricaoTrabalhoVoluntario/possui_experiencia_animais.js"
import { validarPossuiHabilidadeRelevante } from "./dados/inscricaoTrabalhoVoluntario/possui_habilidade_relevante.js"
import { validarEnderecoRegiao } from "./dados/endereco/enderecoRegiao.js";


export function dadosInscricao(req, res, next) {

    if (!req.body) {
      return res.status(400).json({
        erro: "O corpo da requisição não foi informado.",
      });
    }
    
  const dados = {
    nome: req.body.nome_completo,
    idade: req.body.idade,
    email: req.body.email,
    endereco_residencial: req.body.endereco_residencial,
    telefone: req.body.telefone_contato,
    profissao: req.body.profissao_atual,
    dias_disponiveis: req.body.dias_disponiveis,
    periodos_disponiveis: req.body.periodos_disponiveis,
    disponibilidade_durante_jornada: req.body.disponibilidade_durante_jornada,
    experiencias_anteriores_trabalho_voluntario: req.body.experiencias_anteriores_trabalho_voluntario,
    possui_habilidade_relevante: req.body.possui_habilidade_relevante,
    possui_experiencia_animais: req.body.possui_experiencia_animais,
    ciente_atividades_responsabilidades: req.body.ciente_atividades_responsabilidades,
    concorda_orientacoes_regras_seguranca: req.body.concorda_orientacoes_regras_seguranca,
    motivacao_interesse: req.body.motivacao_interesse,
    id_oportunidade_voluntario: req.body.id_oportunidade_voluntario


  };

  const erro =
    validarNome(dados.nome) ||
    validarIdade(dados.idade) ||
    validarEmail(dados.email) ||
    validarEnderecoRegiao(dados.endereco_residencial) ||
    validarTelefone(dados.telefone) ||
    validarProfissao(dados.profissao) ||
    validarDiasDisponiveis(dados.dias_disponiveis) ||
    validarPeriodosDisponiveis(dados.periodos_disponiveis) ||
    validarDisponibilidadeDuranteJornada(dados.disponibilidade_durante_jornada) ||
    validarExperienciasAnterioresTrabalhoVoluntario(dados.experiencias_anteriores_trabalho_voluntario) || validarPossuiHabilidadeRelevante(dados.possui_habilidade_relevante) ||
    validarPossuiExperienciaAnimais(dados.possui_experiencia_animais) || validarCienteAtividadesResponsabilidades(dados.ciente_atividades_responsabilidades) || validarConcordaOrientacoesRegrasSeguranca(dados.concorda_orientacoes_regras_seguranca) || validarMotivacaoInteresse(dados.motivacao_interesse) || validarId(dados.id_oportunidade_voluntario)

  if (erro) {
    console.log("Erro de validação:", erro);
    return res.status(400).json({ erro });
  }

  next();
}