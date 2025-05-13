import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT ?? "4000";
export const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
export const SECURE_URL = process.env.SECURE_URL;
export const URL = `http://localhost:${PORT}`;
