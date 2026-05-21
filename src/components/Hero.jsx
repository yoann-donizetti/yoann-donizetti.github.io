import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope
} from "react-icons/fa";

import profilePhoto from "../assets/profile.png";
import { profile } from "../data/profile.jsx";

export default function Hero() {
  return (
    <section className="hero-section" id="accueil">
      <div className="hero-container">

        {/* ========================================
            COLONNE TEXTE
        ======================================== */}
        <div className="hero-content fade-up">

          {/* TITRE */}
          <h1 className="hero-title">
            {profile.title}
          </h1>

          {/* SOUS-TITRE */}
          <h2 className="hero-subtitle">
            {profile.subtitle}
          </h2>

          {/* DESCRIPTION */}
          <p className="hero-description">
            {profile.description}
          </p>

          {/* PHOTO MOBILE */}
          <div className="hero-image-mobile fade-in">
            <img
              src={profilePhoto}
              alt="Portrait de Yoann Donizetti"
              className="hero-image"
            />
          </div>

          {/* BOUTONS */}
          <div className="hero-buttons">
            <a
              href="#projets"
              className="hero-button-primary"
            >
              Voir mes projets
            </a>

            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button-primary"
            >
              Voir mon CV
            </a>
          </div>

          {/* RÉSEAUX SOCIAUX */}
          <div className="hero-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
            >
              <FaGithub />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-icon"
            >
              <FaLinkedinIn />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="hero-social-icon"
            >
              <FaEnvelope />
            </a>
          </div>

        </div>

        {/* ========================================
            PHOTO DESKTOP
        ======================================== */}
        <div className="hero-image-desktop fade-in">
          <img
            src={profilePhoto}
            alt="Portrait de Yoann Donizetti"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}