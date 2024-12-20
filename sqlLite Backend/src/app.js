import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import config from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();
const PORT = config.port || 3000;

// Middleware
app.use(express.json());

// Using Public files for UI
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Routes
app.use("/auth", authRoutes);
app.use("/todos", authMiddleware, todoRoutes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
