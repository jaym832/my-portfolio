import React from "react";
import "./About.css";
import {
  education,
  experience,
  personalityCards,
  profileFacts,
  skillGroups,
} from "../Portfolio/projectData";

function About() {
  return (
    <main className="page-shell about-page">
      <section className="about-hero">
        <p className="eyebrow">About</p>
        <h1>Revenue-minded engineering with a systems brain.</h1>
        <p>
          Full Stack Software Engineer with 4+ years of experience building
          revenue-driving, customer-facing systems at scale. I work on complex,
          multi-team platforms at The Home Depot and focus on performant
          frontend architecture, backend integrations, and system optimization.
        </p>
      </section>

      <section className="about-grid">
        <article className="about-panel glass-panel">
          <h2>Signal</h2>
          <dl>
            {profileFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article className="about-panel glass-panel">
          <h2>How I work</h2>
          <p>
            I am strongest where product ambiguity meets engineering execution:
            clarifying requirements, finding the workflow shape, and translating
            it into scalable software that teams can operate and customers can
            use. The resume version is simple: measurable impact through
            frontend polish, backend reliability, and system optimization.
          </p>
        </article>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>A practical path through product systems.</h2>
        </div>

        <div className="timeline-list">
          {experience.map((item) => (
            <article className="timeline-item glass-panel" key={`${item.company}-${item.period}`}>
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <strong>{item.company} · {item.location}</strong>
              <p>{item.summary}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div>
                {item.stack.map((stackItem) => (
                  <em key={stackItem}>{stackItem}</em>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>The formal foundation behind the build work.</h2>
        </div>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card glass-panel" key={item.school}>
              <span>{item.period}</span>
              <h3>{item.school}</h3>
              <p>{item.credential}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-skills-section">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>The stack is broad, but the throughline is building useful software.</h2>
        </div>
        <div className="about-skill-grid">
          {skillGroups.map((group) => (
            <article className="about-skill-card glass-panel" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="personality-section">
        <div className="section-heading">
          <p className="eyebrow">Outside the editor</p>
          <h2>A little personality, without turning the portfolio into a bit.</h2>
        </div>
        <div className="personality-grid">
          {personalityCards.map((card) => (
            <article className="glass-panel" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
