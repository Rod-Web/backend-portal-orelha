import {serviceLogar} from '../service/login.js'

export async function controllerLogin(req, res, next) {
    try {
      const { cpf, senha } = req.body;
      const { tokens, usuario } = await serviceLogar(cpf, senha);

    /* ========== PRODUÇÃO (HTTPS) ==========
    secure: true,          // produção: exige HTTPS
    sameSite: "none",      // produção: permite cross-site (front e API em domínios diferentes)

    /* ========== DEV (localhost) ========== */
      res
        .cookie("accessToken", tokens.accessToken, {
          httpOnly: true, // JS não pode ler
          secure: true, // dev: false; HTTP local, sem TLS
          sameSite: "none", // dev: lax; localhost é "mesmo site" mesmo com portas diferentes
          path: "/rotasprivadas", // só envia em rotas privadas
          maxAge: 15 * 60 * 1000, // 15 min
        })
        .cookie("refreshToken", tokens.refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          path: "/auth/refresh", // só envia na rota de renovação
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias
        })
        .status(200)
        .json({ mensagem: "Login efetuado com sucesso. ", usuario });
    } catch (error) {
        next(error);
    };
};