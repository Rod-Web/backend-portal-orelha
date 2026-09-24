import cloudinary from "../config/cloudinary.js";

export async function uploadImg(img) {
  const result = await cloudinary.uploader.upload(
    `data:${img.mimetype};base64,${img.buffer.toString("base64")}`,
    {
      folder: "pets",
    },
  );

  return result.secure_url;
}
