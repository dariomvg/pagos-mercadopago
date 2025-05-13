import "../../styles/pages-docs.css";

export const ConfigMercadopago = () => {
  return (
    <section className="section-content-pages">
      <div className="container-content-docs">
        <h3 className="title-container">Configuración de mercado pago</h3>
        <p className="details-container">
          Para empezar a usar mercado pago para añadir pagos online en tus
          proyectos, necesitas configurar para hacer pruebas en desarrollo e
          implementar todo una vez lo subas a producción
        </p>
      </div>
      <div className="container-content-docs">
        <h3 className="title-container">Notas</h3>
        <p className="details-container">Lo que necesitas saber:</p>
        <p className="details-container">
          - Iniciar sesión en mercado pago con tu cuenta principal y crear una
          aplicación
        </p>
        <p className="details-container">
          - Crear 2 usuarios de prueba: Un comprador y otro vendedor, con dinero
          falso para las pruebas
        </p>
        <p className="details-container">
          - Utilizar distintos navegadores para poder iniciar sesión con los 2
          usuarios de prueba, para efectuar los pagos
        </p>
      </div>
      <ul className="list-container">
        <h3 className="title-container">Pasos de uso de mercado pago: </h3>
        <li className="item-list">
          <p>1. Inicia sesión con tu cuenta principal de mercado pago</p>
        </li>
        <li className="item-list">
          <p>
            2. Dirigete a mercadopago.com/developers, ve a integraciones y crea
            una aplicación
          </p>
        </li>
        <li className="item-list">
          <p>3. Con checkoutPRO o checkoutAPI, llena el formulario y listo</p>
        </li>
        <li className="item-list">
          <p>
            4. Ve hacia usuarios de prueba y crea 2: un vendedor y un
            comprador(mercado pago ya nos los genera por defecto)
          </p>
        </li>
        <li className="item-list">
          <p>
            5. Debes iniciar sesión en mercado pago con el usuario y contraseña
            de estos 2 usuarios, pero debe ser en distintos puede ser navegador,
            incógnito o perfil para simular que es otra persona. <b>Nota: </b>
            <i>
              No puedes pagar desde una cuenta real con dinero real la prueba,
              de hacerlo, te dará error.
            </i>
          </p>
        </li>
        <li className="item-list">
          <p>
            6. En la sesión del vendedor, obtiene el TOKEN en credenciales de
            prueba y agregalo a la variable de entorno ACCESS_TOKEN y crea una
            aplicación de la misma forma que la primera vez, solo que ahora en
            la cuenta de vendedor
          </p>
        </li>
        <li className="item-list">
          <p>
            7. Luego genera la orden de pago desde tu aplicación, abriendo la
            url init_point dónde iniciaste sesión con la cuenta de comprador
            para poder pagar, no en la de vendedor
          </p>
        </li>
        <li className="item-list">
          <p>
            8. <b>Nota: </b>
            <i>
              Para realizar los pagos, mercado pago no ofrece unas tarjetas de crédito y débito de prueba, en tarjetas de prueba
            </i>
          </p>
        </li>
      </ul>
    </section>
  );
};
