import { Router } from "express";
import { createOrder } from "../controllers/create_order.js";
import { sucess } from "../controllers/success.js";
import { failure } from "../controllers/failure.js";
import { pending } from "../controllers/pending.js";
import { webhook } from "../controllers/webhook.js";

export const routes = Router();

routes.post("/api/create-order", createOrder);

routes.post("/api/webhook", webhook);

routes.get("/api/success", sucess);

routes.get("/api/failure", failure);

routes.get("/api/pending", pending);
