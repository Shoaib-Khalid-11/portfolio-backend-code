import app from "./app.js";
import cloudinary from "cloudinary";
import serverless from "serverless-http";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export const handler = serverless(app);

// app.listen(process.env.PORT, () => {
//   console.log(`Server listening at port ${process.env.PORT}`);
// });
// app.use("*", (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
// });
