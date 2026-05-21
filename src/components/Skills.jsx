import { skills, skillsIntro } from "../data/skills";

export default function Skills() {
  return (
    <section id="competences" className="skills-section">
      <div className="skills-container">

        {/* HEADER */}
        <div className="skills-header">
          <p className="skills-label">
            {skillsIntro.section}
          </p>

          <div className="skills-header-content">
            <h2 className="skills-title">
              {skillsIntro.title}
            </h2>

            <p className="skills-description">
              {skillsIntro.description}
            </p>
          </div>
        </div>

        {/* CARTES */}
        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.title} className="skills-card">

              <h3 className="skills-card-title">
                {category.title}
              </h3>

              <div className="skills-tags">

                {category.items.map((item) => (
                  <div key={item.name} className="skills-tooltip">

                    <span
                      className={
                        item.featured
                          ? "skills-tag-featured"
                          : "skills-tag"
                      }
                    >
                      {item.name}
                    </span>

                    <div className="skills-tooltip-content">
                      {item.description}
                    </div>

                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}