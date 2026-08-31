import bcrypt from "bcryptjs"
export async function gerarHash(senha) {
    // A ESTUDAR; CÓDIGO PRONTO
    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);
    console.log("senhaHash", senhaHash)
    return senhaHash
};

