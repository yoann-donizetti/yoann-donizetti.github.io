import { footer } from "../data/footer";

import {
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* ========================================
            INFOS
        ======================================== */}

        <div className="footer-left">

          <p className="footer-name">
            {footer.name}
          </p>

          <p className="footer-role">
            {footer.role}
          </p>

        </div>

        {/* ========================================
            STACK TECH
        ======================================== */}

        <div className="footer-tech">

          {footer.technologies.map((tech, index) => (

            <div
              key={tech}
              className="footer-tech-item"
            >

              <span className="footer-tech-text">
                {tech}
              </span>

              {index < footer.technologies.length - 1 && (
                <span className="footer-tech-separator">
                  •
                </span>
              )}

            </div>

          ))}

        </div>

        {/* ========================================
            ICÔNES
        ======================================== */}

        <div className="footer-links">

          {/* GitHub */}

          <a
            href={footer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}

          <a
            href={footer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          {/* Email */}

          <a
            href={`mailto:${footer.email}`}
            className="footer-icon"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          {/* Retour haut de page */}

          <a
            href="#accueil"
            className="footer-icon"
            aria-label="Retour en haut"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

      {/* ========================================
          COPYRIGHT
      ======================================== */}

      <p className="footer-copy">
        {footer.copyright}
      </p>

    </footer>
  );
}