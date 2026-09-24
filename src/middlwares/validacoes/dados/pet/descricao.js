
export function validarDescricao(descricao) {

        if (descricao == null || descricao.trim() === "") {
          return "É obrigatório inserir uma descrição";
        }

        if (typeof descricao !== "string") {
          return "A descrição deve ser um texto";
        }

        if (descricao.length < 10) {
          return "A descrição deve possuir no mínimo 10 caracteres";
        }

        if (descricao.length > 500) {
          return "A descrição deve possuir no máximo 1000 caracteres";
        }

        return null;
}