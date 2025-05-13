import "../../styles/pages-docs.css";

export const GetStarted = () => {
  return (

      <section className="section-content-pages">
        <div className="container-content-docs">
            <h3 className="title-container">Añade pagos a tu servicio/producto</h3>
            <p className="details-container">
                Puedes agregar pagos a tus proyectos personales de una manera muy fácil y rapida. 
                Mercado pago disponible en gran parte de america latína te permíte poder pagar de forma online de forma segura y confiable. por lo que agregar cobros por tus servicios online es posible. 
            </p>
            <p className="details-container">
                Acá, encontrás todo lo necesario para hacerlo. Código paso por paso para que lo implementes rápido, escalabilidad, fácil de entender, pruebas para desarrollo, etc. con toda la documentación completa tanto para el uso del módulo completo y la configuración de mercado pago.
            </p>
        </div>
        <div className="container-content-docs" >
            <h3 className="title-container">Técnologias</h3>
            <p className="details-container">
                Construido con ReactJS y TypeScript para el cliente en caso de que lo necesites con una demo integrada solo para desarrollo.
            </p>
            <p className="details-container">
                Y en el back-end con NodeJS, ExpressJS. Junto con otras dependencias como cors, dotenv, el SDK de mercado pago y ngrok para desarrollo
            </p>
        </div>
        <div className="container-content-docs">
            <h3 className="title-container">Uso</h3>
            <p className="details-container">
                Para comenzar a usarlo, sigue estos pasos: 
            </p>
            <ul className="list-container">
                <li className="item-list">
                    <h4>1. Clonar repositorio:</h4>
                    <p className="content-code">git clone https://github.com/dariomvg/pagos-mercadopago.git</p>
                </li>
                <li className="item-list">
                    <h4>2. En la raíz principal, ejecutar:</h4>
                    <p className="content-code">npm install</p>
                </li>
                <li className="item-list">
                    <h4>...y en la carpeta /server tambien:</h4>
                    <p className="content-code">npm install</p>
                </li>
                <li className="item-list">
                    <h4>4. Consulta uso de ngrok en la documentación de servidor</h4>
                </li>
                <li className="item-list">
                    <h4>5. Nuevamente en la raiz del proyecto, ejecutar:</h4>
                    <p className="content-code">npm run dev</p>
                    <h4>...y en la de /server, ejecutar</h4>
                    <p className="content-code">npm run dev2</p>
                </li>
                <li className="item-list">
                    <h4>6. Visitar localhost</h4>  
                </li>
            </ul>
        </div>
      </section>
  
  );
};
