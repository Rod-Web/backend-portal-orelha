export function validarValor(valor) {
    if (!valor || valor === undefined || valor.trim() === "") {
        return "Valor inválido.";
    }
    return null;
}