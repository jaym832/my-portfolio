import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import pic from "../Home/images/circle-cropped.png";
import resumeFile from "../Home/images/Javier-Marin-Software-Engineer-Resume-2026.pdf";
import projects, {
  commandActions,
  experience,
  impactStats,
  profileFacts,
  resumeSnapshot,
  skillGroups,
} from "../Portfolio/projectData";

const terminalViews = {
  profile: [
    "load ./javier.profile",
    "role: software engineer",
    "current: The Home Depot",
    "scope: revenue-driving systems at scale",
    "known_for: ambiguous requirements -> scalable solutions",
  ],
  impact: [
    "query impact --recent",
    "$6M revenue influenced",
    "10% of total countertop sales covered",
    "75% fewer installation errors",
    "40% faster average handling time",
  ],
  stack: [
    "scan stack --production",
    "React / Redux / Vue",
    "Node / Java / Spring Boot",
    "GraphQL / SQL / AWS / New Relic",
  ],
};

function Home() {
  const [activeTerminal, setActiveTerminal] = useState("profile");
  const featuredProjects = projects.slice(0, 3);

  function handleHeroMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - bounds.top}px`);
  }

  return (
    <main className="page-shell home-page">
      <section className="hero-console" onMouseMove={handleHeroMove}>
        <div className="hero-copy">
          <p className="eyebrow">Software Engineer | The Home Depot</p>
          <h1>Building revenue-driving customer-facing systems at scale.</h1>
          <p className="hero-lede">
            Full Stack Software Engineer with 4+ years of experience on
            complex, multi-team platforms. I translate ambiguous requirements
            into scalable solutions through performant frontend architecture,
            backend integrations, and system optimization.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/portfolio">
              View case studies
            </Link>
            <a className="button button-secondary" href={resumeFile}>
              Open resume
            </a>
          </div>

          <div className="quick-command-row" aria-label="Command shortcuts">
            {commandActions.slice(0, 4).map((action) => (
              <span key={action.command}>/{action.command}</span>
            ))}
          </div>
        </div>

        <aside className="operator-card glass-panel" aria-label="Javier profile module">
          <div className="operator-status">
            <img src={pic} alt="Javier Marin" />
            <div>
              <span>ONLINE</span>
              <strong>Javier J. Marin</strong>
              <p>Software Engineer</p>
            </div>
          </div>

          <dl className="profile-facts">
            {profileFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <section className="runtime-panel glass-panel" aria-label="Interactive profile terminal">
          <div className="panel-tabs">
            {Object.keys(terminalViews).map((view) => (
              <button
                key={view}
                type="button"
                className={activeTerminal === view ? "active" : ""}
                onClick={() => setActiveTerminal(view)}
              >
                {view}.ts
              </button>
            ))}
          </div>

          <div className="code-window">
            {terminalViews[activeTerminal].map((line, index) => (
              <span key={line}>
                <em>{String(index + 1).padStart(2, "0")}</em>
                {line}
              </span>
            ))}
            <span>
              <em>--</em>
              awaiting next signal_
            </span>
          </div>
        </section>
      </section>

      <section className="impact-dashboard" id="impact" aria-label="Career impact">
        {impactStats.map((stat) => (
          <article className="impact-card glass-panel" key={stat.value}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <h3>{stat.title}</h3>
            <p>{stat.detail}</p>
          </article>
        ))}
      </section>

      <section className="resume-snapshot-section">
        <div className="section-heading">
          <p className="eyebrow">Resume signal</p>
          <h2>The throughline: product impact, systems polish, and measurable outcomes.</h2>
        </div>
        <div className="resume-snapshot-grid">
          {resumeSnapshot.map((item) => (
            <article className="resume-snapshot-card glass-panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="current-role-section">
        <div className="section-heading">
          <p className="eyebrow">Current role</p>
          <h2>{experience[0].role} at {experience[0].company}</h2>
        </div>
        <div className="current-role-card glass-panel">
          <div>
            <span>{experience[0].period}</span>
            <strong>{experience[0].location}</strong>
          </div>
          <ul>
            {experience[0].bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block" id="stack">
        <div className="section-heading">
          <p className="eyebrow">Stack map</p>
          <h2>A toolchain for shipping product work, not just prototypes.</h2>
        </div>

        <div className="stack-universe">
          {skillGroups.map((group, groupIndex) => (
            <article className="stack-card glass-panel" key={group.title}>
              <span>0{groupIndex + 1}</span>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <em key={item}>{item}</em>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading project-heading">
          <div>
            <p className="eyebrow">Selected case files</p>
            <h2>Project work, reframed as product evidence.</h2>
          </div>
          <Link className="text-button" to="/portfolio">
            Browse all work
          </Link>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <Link className="featured-project glass-panel" key={project.slug} to={`/${project.slug}`}>
              <img src={project.image} alt={`${project.title} interface`} />
              <div>
                <span>{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.result}</p>
                <ul>
                  {project.stack.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
