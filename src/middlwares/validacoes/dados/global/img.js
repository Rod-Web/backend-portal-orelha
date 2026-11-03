import multer from "multer";

// Responsável por definir as validações e configurações da imagem
const upload = multer({
  limits: {
    fileSize: 5 * 1240 * 1240, // Limita a 5Mb (Precisa customizar caso de erro)
  },

  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      const erro = new Error("Formato de arquivo não suportado");
      erro.status = 400;

      cb(erro);
    }
  },
});

// Responsável por pegar somente uma imagem especifica
const imagemUpload = upload.single("imagem");

export function uploadImagem(req, res, next) {
  imagemUpload(req, res, (err) => {
    if (err) {
      return next(err);
    }

    next();
  });
}

export function validarImg(img) { // img = req.file

    if(img == null) return "É obrigatório inserir uma imagem"
        
    return null
      
};

export function validarImgUrl(imgUrl) { // img = req.body.imagemUrl

  if(imgUrl == null) return "É obrigatório inserir a URL da imagem (Erro ao capturar a URL já existente, reenvie a imagem)"

  //verificar se a url é valida
  const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
  if (!urlPattern.test(imgUrl)) {
    return "A URL da imagem não é válida";
  }

  return null;
}