import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Portfolio.css";
import { getProject } from "./projectData";

function ProjectDetail({ slug: providedSlug }) {
  const params = useParams();
  const project = getProject(providedSlug || params.slug);

  if (!project) {
    return (
      <main className="page-shell case-page">
        <section className="case-hero">
          <p className="eyebrow">404</p>
          <h1>Case study not found.</h1>
          <Link className="button button-primary" to="/portfolio">
            Return to work
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell case-page">
      <section className="case-hero">
        <Link className="text-button" to="/portfolio">
          Back to work
        </Link>
        <p className="eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </section>

      <section className="case-layout">
        <div className="case-gallery">
          <img src={project.screenshots[0]} alt={`${project.title} primary screen`} />
          <div className="case-gallery-grid">
            {project.screenshots.slice(1, 5).map((screenshot, index) => (
              <img
                key={screenshot}
                src={screenshot}
                alt={`${project.title} screen ${index + 2}`}
              />
            ))}
          </div>
        </div>

        <aside className="case-sidebar glass-panel">
          <h2>Build notes</h2>
          <dl className="repo-meta">
            <div className="case-fact">
              <dt>Objective</dt>
              <dd>{project.objective}</dd>
            </div>
            <div className="case-fact">
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div className="case-fact">
              <dt>Result</dt>
              <dd>{project.result}</dd>
            </div>
          </dl>

          <div className="case-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <ul className="case-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="case-link-list">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <span>open</span>
              </a>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}

export default ProjectDetail;
