import { product } from "../utils/product";
import "../styles/demo.css";
import { payProduct } from "../libs/pay_product";

export default function Demo() {
  const {
    picture_url,
    title,
    details,
    unit_price,
    stock,
    category,
    description,
  } = product;

  const createOrder = async () => {
    await payProduct(product);
  };

  return (
    <main className="main-demo">
      <section className="section-product-demo">
        <img
          src={picture_url}
          alt={title}
          width={500}
          height={500}
          className="picture-product"
          title={title}
        />
        <div className="container-product-demo">
          <div className="cont-category-price">
            <div>
              <h1 className="name-product">{title}</h1>
              <strong className="category-product">{category}</strong>
            </div>
            <p className="price-product">${unit_price}</p>
          </div>

          <p className="description-product">{description}</p>

          <ul className="list-details-product">
            {details.map(({ id, detail }) => (
              <li key={id} className="detail-product">
                {detail}
              </li>
            ))}
          </ul>
          <p className="stock-product">Cantidad disponible: {stock}</p>
          <button className="button-product" onClick={createOrder}>
            Comprar
          </button>
        </div>
      </section>
    </main>
  );
}
