import { product } from "../utils/product";
import "../styles/demo.css";

export default function Demo() {
  const { id, picture, name, details, price, stock, category, description } =
    product;
  console.log(id);
  return (
    <main className="main-demo">
      <section className="section-product-demo">
        <img
          src={picture}
          alt={name}
          width={500}
          height={500}
          className="picture-product"
          title={name}
        />
        <div className="container-product-demo">
          <div className="cont-category-price">
            <div>
              <h1 className="name-product">{name}</h1>
              <strong className="category-product">{category}</strong>
            </div>
            <p className="price-product">${price}</p>
          </div>

          <p className="description-product">{description}</p>

          <ul className="list-details-product">
            {details.map(({ id, detail }) => (
              <li key={id} className="detail-product">
                {detail}
              </li>
            ))}
          </ul>
          <p className="stock-product">Cantidad: {stock}</p>
          <button className="button-product">Comprar</button>
        </div>
      </section>
    </main>
  );
}
