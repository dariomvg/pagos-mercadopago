export const failure = (req, res) => {
  console.log("No se pudo realizar el pago");
  res.send("failure"); // Puedes redirreccionar a una ruta de tu aplicación
};
