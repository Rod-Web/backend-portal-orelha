import { v2 as cloudinary } from "cloudinary";
import { cloudinaryCredenciais } from "./credenciais.js";

const credenciais = cloudinaryCredenciais();

cloudinary.config({
    cloud_name: credenciais.cloud_name,
    api_key: credenciais.api_key,
    api_secret: credenciais.api_secret
});

export default cloudinary;