import { payment } from "../options_mercadopago.js";

export const webhook = async (req, res) => {
  try {
    const query = req.query;
    if (query.topic === "payment") {
      const result = await payment.search(query["data.id"]); // Puedes guardar los datos del pago en tu base de datos
      console.log({
        status: result.results[0].status,
        email: result.results[0].payer.email,
      });
      res.sendStatus(204);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error en el webhook" });
  }
};
