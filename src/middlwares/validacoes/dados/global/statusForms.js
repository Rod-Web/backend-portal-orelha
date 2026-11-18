export function statusForms(status) {
    if (status == null || status == undefined || status === "") {
      return "É obrigatório inserir um status";
    }

    if (typeof status !== "string") {
      return "O status deve ser uma string";
    }

    const statusNormalizado = status.trim().toLowerCase();
    const statusValidos = ["pendente", "aprovada", "reprovada", "em_analise"];

    if (!statusValidos.includes(statusNormalizado)) {
      return "O status deve ser 'PENDENTE', 'APROVADA', 'REPROVADA' ou 'EM_ANALISE'";
    }

    return null;
}