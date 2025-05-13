import "../../styles/pages-docs.css";

export const Client = () => {
  return (
    <section className="section-content-pages">
      <h1 className="title-container">Configuración completa del front-end</h1>
      <div className="container-content-docs">
        <h3 className="title-container">Notas</h3>

        <p className="details-container">
          - Puedes clonar este proyecto, esto traerá todo el código completo,
          con el fin de que puedas probar la demo en desarrollo
        </p>
        <p className="details-container">
          - Para poder hacer pruebas del código, primero consulta la
          documentación sobre la configuración de mercado pago. Para crear
          usuarios de prueba, pagos falsos para simular un entorno real, además
          de las diferentes instancias del pago(failure, success, pending), etc.
        </p>
        <p className="details-container">
          - Por último, el proyecto está hecho para que los pagos se manejen a
          través de un back-end propio junto con el SDK que ofrece mercado pago,
          ya listo en npm.
        </p>
      </div>
      <div className="container-content-docs">
        <h3 className="title-container">Uso del demo</h3>
        <p className="details-container">
          La demo solo esta disponible en desarrollo, por lo que, siguiendo los
          pasos de configuración,tanto en cliente como en servidor, podrás
          probar y ejecutar el pago del producto.
        </p>
        <p className="details-container">Sigue estos pasos:</p>
        <ul className="list-container">
          <li className="item-list">
            <p>
              1. Una vez ya hayas completado todos los pasos, dirígete a la ruta
              /demo
            </p>
          </li>
          <li className="item-list">
            <p>2. Presiona en comprar y mira la consola del navegador</p>
          </li>
          <li className="item-list">
            <p>
              3. Dentro de ese objeto, en init_point, hay una url para realizar
              el pago
            </p>
          </li>
          <li className="item-list">
            <p>
              4. haz el pago con un usuario falso comprador ya creado
              anteriormente, sino, consulta la configuración de mercado pago
            </p>
          </li>
          <li className="item-list">
            <p>
              5. Mira la consola en la terminal de tu editor de código para
              verificar como ha salido el pago junto con los datos del pago
              realizado
            </p>
          </li>
        </ul>
      </div>
      <div className="container-content-docs">
        <h3 className="title-container">Tipos del producto</h3>

        <code className="code">
          <pre>
            <i>{`{`}</i>
          </pre>
          <pre className="content-pre">
            <i>id:</i> string,
          </pre>
          <pre className="content-pre">
            <i>picture_url:</i> string,
          </pre>
          <pre className="content-pre">
            <i>title:</i> string,
          </pre>
          <pre className="content-pre">
            <i>quantity:</i> number,
          </pre>
          <pre className="content-pre">
            <i>description:</i> string,
          </pre>
          <pre className="content-pre">
            <i>details:</i> {`[{id: number, detail: string}],`}
          </pre>
          <pre className="content-pre">
            <i>unit_price:</i> number,
          </pre>
          <pre className="content-pre">
            <i>stock:</i> number,
          </pre>
          <pre className="content-pre">
            <i>category:</i> string,
          </pre>
          <pre>
            <i>{`}`}</i>
          </pre>
        </code>
      </div>
      <div className="container-content-docs">
        <h3 className="title-container">Variables de entorno</h3>
        <p className="details-container">
          Tienes 2 variables de entorno en config: <i>is_development</i> y{" "}
          <i>url_server</i>
        </p>
        <p className="details-container">
          <b>is_development:</b> contiene lo de <em>import.meta.env.DEV</em> que
          es una variable que nos da vite. TRUE si esta en desarrollo y FALSE en
          producción. sirve unicamente para proteger la ruta <b>/demo</b> y solo
          se pueda usar en desarrollo.
        </p>
        <p className="details-container">
          <b>url_server:</b> contiene lo de{" "}
          <em>import.meta.env.VITE_URL_SERVER </em>
          que es una variable propia para guardar la <b>
            url del servidor
          </b>{" "}
          para poder hacer las peticiones necesarias.
        </p>
      </div>
    </section>
  );
};
