import {MercadoPagoConfig, Payment, Preference } from "mercadopago"
import { ACCESS_TOKEN } from "./config.js";

const client = new MercadoPagoConfig({accessToken: ACCESS_TOKEN});

export const order = new Preference(client);
export const payment = new Payment(client); 
