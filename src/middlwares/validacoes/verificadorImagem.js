import { validarImg, validarImgUrl } from "./dados/global/img.js";

export function verificarImagem(req, res, next) {

  
  if (req.body.imagemUrl) {
    const erro = validarImgUrl(req.body.imagemUrl);

    if (erro) {
      return res.status(400).json({ erro });
    }

    return next();
  }

  if (req.file) {
    const erro = validarImg(req.file);
    if (erro) {
      return res.status(400).json({ erro });
    }
    return next();
  }

  return res.status(400).json({
    erro: "É obrigatório enviar uma imagem ou sua URL.",
  });
}
