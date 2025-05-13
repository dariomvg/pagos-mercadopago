import "../../styles/pages-docs.css";
export const Server = () => {
  return (


      <section className="section-content-pages">
        <div className="container-content-docs" id="uso">
          <h3 className="title-container">Nota</h3>
          <p className="details-container">El back-end está hecho con NodeJS y ExpressJS, más el uso de algunas dependencias como cors, dotenv, el SDK que ofrece mercado pago y ngrok para desarrollo</p>
        </div>
        <div className="container-content-docs" id="variables-entorno">
          <h3 className="title-container">Variables de entorno</h3>
          <p className="details-container">
            Hay 2 variables de entorno en config que necesitarás: <em>ACCESS_TOKEN</em> y <em>SECURE_URL</em>  
          </p>
          <p className="details-container">
           <b>ACCESS_TOKEN:</b> Aca guardarás el token de tu usuario de mercado pago
          </p>
          <p className="details-container">
            <b>SECURE_URL:</b> Esta variable sirve unicamente para cuando estés en desarrollo, para las pruebas con mercado pago, por ejemplo en el uso de la <i>back_urls</i>, mercado pago necesita HTTPS, por eso aca guardaras la url que te da usando ngrok
          </p>
        </div>
        <div className="container-content-docs" id="ngrok">
          <h3 className="title-container">Uso de ngrok</h3>
          <p className="details-container">
            Como se dijo anteriormente, ngrok se usará solo para desarrollo
          </p>
          <p className="details-container">
            ngrok nos ofrece poder reedireccionar nuestra url del back-end(HTTP) a una segura(HTTPS), esto es útil por que mercado pago, en su configuración como las <i>back_urls</i> o <i>notification_url</i> necesita una ruta con HTTPS
          </p>
          <p className="details-container">
            Por eso, es que una vez desplegada tu aplicación y back-end, agregaras la url de esta última.         
            </p>
        </div>
        <ul className="list-container">
            <h3 className="title-container">Pasos de uso:</h3>
            <li className="item-list">
              <p>
                1. Ve a la pagina oficial de ngrok y descarga el ejecutable para windows o el de tu sistema
              </p>
            </li>
            <li className="item-list">
              <p>
                2. Una vez tengas el ejecutable, agrégalo en la raíz de la carpeta '/server', tendrá el nombre de ngrok.exe
              </p>
            </li>
            <li className="item-list">
              <p>
                3. Abre la terminal, dirigete a la carpeta server y ejecuta:
              </p>
              <p className="content-code">./ngrok.exe http 4000(tu-puerto)</p>
            </li>
          </ul>
      </section>
  
  );
};
