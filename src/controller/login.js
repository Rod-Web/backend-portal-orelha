import {serviceLogar} from '../service/login.js'

export async function controllerLogin(req, res, next) {
    try {
        const {cpf, senha} = req.body;
        const {tokens, tipo_usuario} = await serviceLogar(cpf, senha);
        console.log(tokens + "oi")
        res
        .cookie("accessToken", tokens.accessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "none",
            path: '/rotasprivadas'
        })
        .cookie('refreshToken', tokens.refreshToken, {
            httpOnly: true, // JavasCript não pode ler
            secure: false, // Só permite https
            sameSite: "none", // Permite cross-site, consumir a API em dominio diferente
            path: '/auth/refresh'
        })
        .status(200)
        .json({mensagem: "Login efetuado com sucesso.", tipo_usuario: tipo_usuario});
    } catch (error) {
        next(error);
    };
};