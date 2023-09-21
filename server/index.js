import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(dalleRoutes);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello " });
});
app.listen(5000, () => console.log(`Server running on port 5000`));
