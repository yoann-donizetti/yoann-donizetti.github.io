import { contact } from "../data/contact";

export default function Contact() {

  return (

    <section
      id="contact"
      className="contact-section"
    >

      <div className="contact-container">

        {/* ========================================
            HEADER
        ======================================== */}

        <div className="contact-header">

          <p className="contact-label">
            {contact.section}
          </p>

          <div className="contact-content">

            <h2 className="contact-title">
              {contact.title}
            </h2>

            <p className="contact-description">
              {contact.description}
            </p>

          </div>

        </div>

        {/* ========================================
            LIENS
        ======================================== */}

        <div className="contact-links">

          {contact.links.map((link) => (

            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              {link.name}
            </a>

          ))}

        </div>

      </div>

    </section>
  );
}