import { v2 as cloudinary } from "cloudinary";

// export default function myTestIntegration() {
//   return {
//     name: "test integration",
//     hooks: {
//       "astro:config:setup": () => {
//         console.log(`this is my integration test`);
//       },
//     },
//   };
// }

export default function cloudinaryConfig(config) {
  return {
    name: "cloudinary config",
    hooks: {
      "astro:config:setup": () => {
        cloudinary.config(config);
        console.log("cloudinary config set");
      },
    },
  };
}
