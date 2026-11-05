export function validarId(id) {
    if (id == null || id == undefined || id === "") {
          return "É obrigatório inserir um id";
        }

        id = parseInt(id);

        if (!Number.isInteger(id)) {
          return "O id deve ser um número inteiro";
        }

        if (id === NaN) {
          return "O id deve ser um número válido";
        }

        if (id < 0) {
          return "O id não pode ser negativo";
        }

        return null;

}