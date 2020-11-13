import { NextApiRequest, NextApiResponse } from "next";
import { v2 } from "cloudinary";

v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const file = JSON.parse(req.body);

    const response = await v2.uploader.upload(file);

    return res.status(201).json(response.secure_url);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
