import { about } from "../data/about.jsx";

export default function About() {
  return (
    <section className="about-section" id="apropos">
      <div className="about-container">

        {/* COLONNE TEXTE */}
        <div className="about-content">

          {/* Label */}
          <p className="about-label">
            {about.section}
          </p>

          {/* Titre */}
          <h2 className="about-title">
            {about.title}
          </h2>

          {/* Paragraphes */}
          <div className="about-text">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

        </div>

        {/* CARTES */}
        <div className="about-cards">
          {about.cards.map((card) => (
            <div key={card.title} className="about-card">
              <h3 className="about-card-title">
                {card.title}
              </h3>

              <p className="about-card-description">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}