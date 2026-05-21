import { useState } from "react";
import { navigationLinks } from "../data/navigation";

export default function Navbar() {

  /* État permettant d’ouvrir ou fermer le menu mobile */
  const [isOpen, setIsOpen] = useState(false);

  return (

    /* Barre de navigation principale */
    <nav className="navbar">

      {/* Conteneur interne */}
      <div className="navbar-container">

        {/* Logo / Nom */}
        <h1 className="navbar-logo">
          DONIZETTI Yoann
        </h1>

        {/* Navigation desktop */}
        <ul className="navbar-links">

          {navigationLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar-link"
              >
                {link.label}
              </a>
            </li>
          ))}

        </ul>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-mobile-button"
        >

          {/* Icône dynamique */}
          {isOpen ? "×" : "☰"}

        </button>

      </div>

      {/* Menu mobile */}
      {isOpen && (

        <ul className="navbar-mobile-menu">

          {navigationLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}

        </ul>

      )}

    </nav>
  );
}