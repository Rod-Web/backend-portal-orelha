export function validarNome(nome) {

    nome = nome.trim()
    // Validar se existe
    if (!nome) return "O nome não foi inserido.";
    // Validar se tá no tipo correto
    if (typeof nome !== "string")
        return "Só é permitido caracteres de texto no nome.";

    // Validar se o conteúdo está correto
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/;
    if (!regexNome.test(nome)) return "O nome só pode ter caracteres de A-Z";
    
    // validar tamanho
    if (nome.length < 3 || nome.length > 100)
        return "O nome deve ter entre 3-100 caracteres";

    return null;
}