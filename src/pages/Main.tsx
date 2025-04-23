import { Link } from "react-router-dom";
import { details } from "../utils/details_main";
import iconGithub from "../assets/github.svg";
import iconLogo from "../assets/mercado-pago.svg";
import "../styles/main.css";

export default function Main() {
  return (
    <main className="main">
      <section className="section-main">
        <img src={iconLogo} alt="mercado pago logo" width={50} height={50} className="logo" />
        <h1 className="title-section-main">
          Pagos en tus proyectos y/o servicios con MercadoPago
        </h1>
        <div>
          <p className="detail-section-main">
            Agrega estos módulos para permitir que tus clientes paguen
            por tu servicio, producto, etc
          </p>
          <p className="detail-section-main">
            rápido, simple y seguro de implementar y comenzar a crecer
          </p>
        </div>
        <Link to="/docs" className="link-section-main">
          Comenzar
        </Link>
      </section>
      <section className="section-demo">
        <ul className="list-section-demo">
          {details.length > 0 &&
            details.map(({ id, title, detail }) => (
              <li className="item-section-demo" key={id}>
                <h3>{title}</h3>
                <p>{detail}</p>
              </li>
            ))}
        </ul>
        <Link to="/demo" className="link-section-demo">
          Demo
        </Link>
      </section>
      <section className="section-docs">
        <h3 className="title-section-docs">
          Comienza aprender el uso y como implementarlo en tu proyecto
        </h3>
        <Link to="/docs" className="link-section-docs">
          Documentación
        </Link>
      </section>
      <footer className="footer">
        <h4>Todos los derechos reservados 2025</h4>
        <a
          href="https://github.com/dariomvg/pagos-mercadopago"
          rel="noreferrer noopener"
          target="_blank"
          className="link-footer">
          <img
            src={iconGithub}
            alt="github"
            width={25}
            height={25}
            className="icon-header"
          />
        </a>
      </footer>
    </main>
  );
}
