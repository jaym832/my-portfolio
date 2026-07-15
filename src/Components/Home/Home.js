import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import pic from "../Home/images/circle-cropped.png";
import resumeFile from "../Home/images/Javier-Marin-Software-Engineer-Resume-2026.pdf";
import projects, {
  capabilityCards,
  commandActions,
  impactStats,
  profileFacts,
} from "../Portfolio/projectData";

const terminalViews = {
  profile: [
    "load ./javier.profile",
    "role: software engineer",
    "current: The Home Depot",
    "favorite_problem: messy workflows",
    "output: clear screens + reliable handoffs",
  ],
  impact: [
    "query impact --recent",
    "commerce: $6M partial pay path",
    "store tools: 75% fewer installation misses",
    "ops: 40% faster handling",
    "pattern: remove friction where teams feel it",
  ],
  stack: [
    "scan stack --production",
    "React / Redux / Vue",
    "Node / Java / Spring Boot",
    "SQL / GraphQL / AWS / New Relic",
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
          <h1>I turn messy workflows into software people can actually use.</h1>
          <p className="hero-lede">
            I work across retail commerce, in store design tools, dashboards,
            search, and service integrations. The common thread is simple: make
            complicated work easier to complete, easier to trust, and easier to
            measure.
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
              <a
                key={action.command}
                href={action.target === "resume" ? resumeFile : action.target}
              >
                /{action.command}
              </a>
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

      <section className="capability-section">
        <div className="section-heading">
          <p className="eyebrow">What I am good at</p>
          <h2>The useful middle between product intent and production code.</h2>
        </div>
        <div className="capability-grid">
          {capabilityCards.map((item) => (
            <article className="capability-card glass-panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading project-heading">
          <div>
            <p className="eyebrow">Selected case files</p>
            <h2>Older public builds, viewed through a more senior lens.</h2>
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
