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

export function segredoJwt() {
    const dados = {
        access_token: process.env.ACCESS_TOKEN_SECRET,
        refresh_token: process.env.REFRESH_TOKEN_SECRET
    }

    return dados;
};

export function cloudinaryCredenciais() {
    const dados = {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    };

    return dados
}
