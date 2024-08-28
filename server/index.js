import express from "express";


const port = process.env.PORT || 3000;
const app = express();
// imagekit config //
const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
  });
  
  app.get("/api/upload", (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
  });

app.listen(port, () => {
    console.log("Server running on 3000");
  });