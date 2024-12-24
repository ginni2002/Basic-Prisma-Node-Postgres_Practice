import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

dotenv.config({ path: path.join(__dirName, "../../.env") });

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwt_secret: process.env.JWT_SECRET,
  db_url: process.env.DATABASE_URL,
};

export default config;
