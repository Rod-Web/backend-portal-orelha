export function normalizarTelefone(telefone) {
    
    telefone = telefone.trim();

    // Remove espaços, parênteses, traços e outros caracteres
    telefone = telefone.replace(/\D/g, "");

    return telefone
}