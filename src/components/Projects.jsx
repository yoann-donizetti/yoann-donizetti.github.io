import { useState } from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaServer,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

import {
  projectsIntro,
  featuredProjects,
  otherProjects,
  personalProjects
} from "../data/projects";

export default function Projects() {

  const [currentIndexes, setCurrentIndexes] = useState({});

  const nextSlide = (projectIndex, total) => {

    setCurrentIndexes((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) + 1) % total
    }));
  };

  const prevSlide = (projectIndex, total) => {

    setCurrentIndexes((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) - 1 + total) % total
    }));
  };

  return (

    <section
      id="projets"
      className="projects-section"
    >

      <div className="projects-container">

        {/* ========================================
            HEADER
        ======================================== */}

        <div className="projects-header">

          <p className="projects-label">
            {projectsIntro.section}
          </p>

          <div className="projects-header-content">

            <h2 className="projects-title">
              {projectsIntro.title}
            </h2>

            <p className="projects-description">
              {projectsIntro.description}
            </p>

          </div>

        </div>

        {/* ========================================
            FEATURED PROJECTS
        ======================================== */}

        <div className="featured-projects">

          {featuredProjects.map((project, projectIndex) => {

            const currentSlide =
              currentIndexes[projectIndex] || 0;

            return (

              <article
                key={project.title}
                className="project-card"
              >

                {/* CATEGORY */}

                <p className="project-category">
                  {project.category}
                </p>

                {/* TITLE */}

                <h3 className="project-title">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="project-description">
                  {project.description}
                </p>

                {/* STACK */}

                <div className="project-stack">

                  {project.stack.map((tech) => (

                    <span
                      key={tech}
                      className="project-tag"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* HIGHLIGHTS */}

                <ul className="project-highlights">

                  {project.highlights.map((highlight) => (

                    <li key={highlight}>
                      {highlight}
                    </li>

                  ))}

                </ul>

                {/* ACTIONS */}

                <div className="project-actions">

                  {/* GITHUB */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {/* DEMO */}

                  {project.demo && (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>

                  )}

                  {/* API */}

                  {project.api && (

                    <a
                      href={project.api}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      <FaServer />
                      API
                    </a>

                  )}

                  {/* MONITORING */}

                  {project.monitoring && (

                    <a
                      href={project.monitoring}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      <FaChartLine />
                      Monitoring
                    </a>

                  )}

                </div>

                {/* ========================================
                    CARROUSEL
                ======================================== */}

                {project.previews &&
                  project.previews.length > 0 && (

                  <div className="project-carousel">

                    <img
                      src={
                        project.previews[currentSlide]
                      }
                      alt={project.title}
                      className="project-preview-image"
                    />

                    {/* LEFT */}

                    {project.previews.length > 1 && (

                      <button
                        onClick={() =>
                          prevSlide(
                            projectIndex,
                            project.previews.length
                          )
                        }
                        className="project-carousel-button left"
                      >
                        <FaChevronLeft />
                      </button>

                    )}

                    {/* RIGHT */}

                    {project.previews.length > 1 && (

                      <button
                        onClick={() =>
                          nextSlide(
                            projectIndex,
                            project.previews.length
                          )
                        }
                        className="project-carousel-button right"
                      >
                        <FaChevronRight />
                      </button>

                    )}

                    {/* DOTS */}

                    {project.previews.length > 1 && (

                      <div className="project-carousel-dots">

                        {project.previews.map(
                          (_, index) => (

                            <span
                              key={index}
                              className={`project-dot ${
                                currentSlide === index
                                  ? "active"
                                  : ""
                              }`}
                            />

                          )
                        )}

                      </div>

                    )}

                  </div>

                )}

              </article>

            );
          })}

        </div>

        {/* ========================================
            OTHER PROJECTS
        ======================================== */}

        <div className="other-projects-section">

          <h3 className="other-projects-title">
            Autres projets
          </h3>

          <div className="other-projects-grid">

            {otherProjects.map((project) => (

              <a
                key={project.title}
                href={project.github || project.slides}
                target="_blank"
                rel="noopener noreferrer"
                className="other-project-card"
              >

                <h4 className="other-project-card-title">
                  {project.title}
                </h4>

                <p className="other-project-card-description">
                  {project.description}
                </p>

              </a>

            ))}
          </div>

        </div>

                {/* ========================================
            PERSONAL PROJECTS
        ======================================== */}

        <div className="personal-projects-section">

          <h3 className="personal-projects-title">
            Projets personnels
          </h3>

          {personalProjects.map((project) => (

            <div
              key={project.title}
              className="personal-project-card"
            >

              <div>

                <h4 className="personal-project-title">
                  {project.title}
                </h4>

                <p className="personal-project-description">
                  {project.description}
                </p>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

              </div>

              <span className="personal-project-status">
                {project.status}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}