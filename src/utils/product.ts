import image from "../assets/images/laptop.webp";
import { Product } from "../types/types";

export const product: Product = {
  id: "oausg187561-ajsgfbas-26gaga-ftybv834900-jftqvvjn",
  picture: image,
  name: "Laptop Dell XPS 15",
  description: "La Dell XPS 15 es una laptop premium con cuerpo de aluminio, pantalla 4K ultra nítida, procesador Intel i7 y gráficos dedicados. Elegante y poderosa, es ideal para profesionales",
  details: [
    {
      id: 0,
      detail:
        "1. Procesador: Intel Core i7-12700H de 12ª generación",
    },
    {
      id: 1,
      detail:
        "2. Memoria RAM: 32 GB DDR5, fluidez total para todo tipo de entornos ",
    },
    {
      id: 2,
      detail:
        "3. Almacenamiento: SSD NVMe de 1 TB",
    },
    {
      id: 3,
      detail:
        "4. Pantalla: 15.6” 4K UHD+ (3840 x 2400), colores vibrantes y precisión profesional",
    },
    {
      id: 4,
      detail:
        "5. Gráficos: NVIDIA GeForce RTX 3050 Ti 4GB, perfecta para edición y modelado 3D",
    },
    {
      id: 5,
      detail:
        "6. Sistema Operativo: Windows 11 Pro. Más seguridad y funciones",
    },
  ],
  price: 100000,
  stock: 20,
  category: "Electronics",
};
