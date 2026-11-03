export function validarValor(valor) {
    if (!valor || valor === null || valor.trim() === "") {
        return "Valor inválido.";
    }
    return null;
}