import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import projects from "./projectData";

function Portfolio() {
  return (
    <main className="page-shell portfolio-page">
      <section className="portfolio-hero">
        <p className="eyebrow">Work directory</p>
        <h1>Public builds that support the resume story.</h1>
        <p>
          My professional resume now carries the strongest business outcomes:
          revenue-driving commerce work, workflow accuracy gains, and internal
          system optimization. These public projects add visible evidence of
          full-stack fundamentals, interface thinking, API work, and shipping
          habits.
        </p>
      </section>

      <section className="repo-grid" aria-label="Project case studies">
        {projects.map((project, index) => (
          <article className="repo-card glass-panel" key={project.slug}>
            <div className="repo-media">
              <img src={project.image} alt={`${project.title} interface`} />
              <span>repo 0{index + 1}</span>
            </div>

            <div className="repo-body">
              <div>
                <p className="eyebrow">{project.eyebrow}</p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </div>

              <dl className="repo-meta">
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Result</dt>
                  <dd>{project.result}</dd>
                </div>
              </dl>

              <div className="repo-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <Link className="button button-primary" to={`/${project.slug}`}>
                Open case study
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Portfolio;
