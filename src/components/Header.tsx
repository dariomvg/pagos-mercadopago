import "../styles/header.css";
import iconGithub from "../assets/github.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        if (isAtTop) {
          setIsAtTop(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAtTop]);

  return (
    <header className={`header ${isAtTop ? "top" : ""}`}>
      <nav className="nav-header">
        <Link to="/" className="link-nav">
          Principal
        </Link>
        <Link to="/demo" className="link-nav">
          Demo
        </Link>
        <Link to="/docs" className="link-nav">
          Documentación
        </Link>
      </nav>
      <a
        href="https://github.com/dariomvg/pagos-mercadopago"
        rel="noreferrer noopener"
        target="_blank"
        className="link-nav-github">
        <img
          src={iconGithub}
          alt="github"
          width={25}
          height={25}
          className="icon-header"
        />
      </a>
    </header>
  );
};
