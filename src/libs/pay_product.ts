import { Product } from "../types/product.types";
import { url_server } from "../utils/config";

export const payProduct = async (product: Product) => {
  const response = await fetch(`${url_server}/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
      id: product.id,
      title: product.title,
      unit_price: product.unit_price,
      currency_id: "ARS",
      description: product.description,
      picture_url: product.picture_url,
      quantity: product.quantity,
    }),
  });
  const data = await response.json();
  console.log(data);
};
