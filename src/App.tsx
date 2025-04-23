import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Demo from "./pages/Demo";
import Docs from "./pages/Docs";
import { Header } from "./components/Header";


export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="*" element={<section>404 Not Found</section>} />
        </Routes>
        
      </Router>
    </>
  );
}
