import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./pages/Main";
import Demo from "./pages/Demo";
import Docs from "./pages/Docs";
import { Header } from "./components/Header";
import PrivateRoute from "./pages/PrivateRoute";
import { is_development } from "./utils/config";
import { Client } from "./pages/docs/Client";
import { Server } from "./pages/docs/Server";
import { GetStarted } from "./pages/docs/GetStarted";
import { ConfigMercadopago } from "./pages/docs/ConfigMercadopago";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/docs" element={<Docs />}>
            <Route index element={<Navigate to="comenzar" replace />} />
            <Route path="comenzar" element={<GetStarted />} />
            <Route path="client" element={<Client />} />
            <Route path="server" element={<Server />} />
            <Route path="config-mercadopago" element={<ConfigMercadopago />} />
          </Route>
          <Route
            path="/demo"
            element={
              <PrivateRoute isDevelopment={is_development}>
                <Demo />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<section>404 Not Found</section>} />
        </Routes>
      </Router>
    </>
  );
}
