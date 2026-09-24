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
            cb(new Error("Formato de arquivo não suportado"));
        }
    },
    });

// Responsável por pegar somente uma imagem especifica
export const imagemUpload = upload.single("imagem");

export function validarImg(img) { // img = req.file

    if(img == null) return "É obrigatório inserir uma imagem"
        
    return null
      
};