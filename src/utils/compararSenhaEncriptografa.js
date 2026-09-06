import bcrypt from "bcryptjs";

export async function compararSenha(senha, senhaCriptografada) {
    const senhaValidada = await bcrypt.compare(senha, senhaCriptografada);
    return senhaValidada
};