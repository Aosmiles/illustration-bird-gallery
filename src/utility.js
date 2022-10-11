import { v2 as cloudinary } from 'cloudinary';

export function setupCloudinary() {
  cloudinary.config({
    cloud_name: 'arlin-ortiz',
    api_key: import.meta.env.CLOUDINARY_API_KEY,
    api_secret: import.meta.env.CLOUDINARY_API_SECRET,
    secure: true
  });
  console.log("cloudinary config set");
}