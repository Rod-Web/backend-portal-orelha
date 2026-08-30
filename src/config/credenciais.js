import { configDotenv } from "dotenv";

configDotenv();

export function bancoDeDados() {
    const dados = {
        usuario: process.env.USUARIO_BANCO_DE_DADOS,
        database: process.env.DATABASE_BANCO_DE_DADOS,
        host: process.env.HOST_BANCO_DE_DADOS,
        porta: process.env.PORTA_BANCO_DE_DADOS,
        senha: process.env.SENHA_BANCO_DE_DADOS
    }

    return dados;
}