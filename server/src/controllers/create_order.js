import { SECURE_URL } from "../config.js";
import { order } from "../options_mercadopago.js";

export const createOrder = async (req, res) => {
  try {
    const product = req.body;
    const result = await order.create({
      body: {
        items: [product],
        back_urls: {
          success: `${SECURE_URL}/api/success`,
          pending: `${SECURE_URL}/api/pending`,
          failure: `${SECURE_URL}/api/failure`,
        },
        notification_url: `${SECURE_URL}/api/webhook`,
      },
      requestOptions: {
        timeout: 10000,
      },
    });

    res.send(result);
  } catch (error) {
    console.error("Error al crear la orden:", error.message);
    res.status(500).json({ error: error.message });
  }
};
