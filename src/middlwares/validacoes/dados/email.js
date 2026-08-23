export function validarEmail(email) {
    if (!email) return "Preencha o campo do email.";

    email = email.trim();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) return "Email com formato inválido.";

    return null;
};

