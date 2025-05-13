import { Link, Outlet } from "react-router-dom";
import "../styles/docs.css";

export default function Docs() {
  return (
    <main className="main-docs">
      <aside className="aside-docs">
        <Link to="comenzar" className="link-aside-docs">
          Comenzar
        </Link>
        <Link to="client" className="link-aside-docs">
          cliente
        </Link>
        <Link to="server" className="link-aside-docs">
          servidor
        </Link>
        <Link to="config-mercadopago" className="link-aside-docs">
          Configuración Mercado Pago
        </Link>
      </aside>

      <section className="section-content-docs">
        <Outlet />
      </section>
    </main>
  );
}
