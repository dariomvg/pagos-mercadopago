import express from "express";
import cors from "cors";
import { PORT, URL } from "./config.js";
import { routes } from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(routes);

app.listen(PORT, () => console.log(URL));
