import React from "react";
import "./About.css";
import {
  capabilityCards,
  education,
  experience,
  personalityCards,
  profileFacts,
  skillGroups,
  teamHabits,
} from "../Portfolio/projectData";

function About() {
  return (
    <main className="page-shell about-page">
      <section className="about-hero">
        <p className="eyebrow">About</p>
        <h1>I like the work between the ticket and the shipped thing.</h1>
        <p>
          The interesting part is rarely just writing a component or wiring an
          endpoint. It is understanding why the flow is painful, what the system
          needs to remember, where the handoff breaks, and how to make the next
          action obvious.
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

        <article className="about-panel glass-panel about-work-panel">
          <h2>How I work</h2>
          <p>
            I start by identifying the user, the decision they are trying to
            make, and the points where the experience could break down. From
            there, I think through application state, loading behavior, service
            boundaries, data shape, release strategy, and the signals that will
            show whether the change was successful.
          </p>
          <p>
            I do my best work when product, design, QA, backend, and operations
            are involved early, because the strongest solutions usually come
            from viewing the same problem from multiple perspectives. I aim to
            be the teammate who asks clear questions, communicates tradeoffs
            without ego, documents the decisions that matter, and stays involved
            through release rather than stopping once the code works locally.
          </p>
          <p>
            I also use tools such as GitHub Copilot where they provide the most
            value, including speeding up repetitive development, comparing
            implementation approaches, drafting tests, and turning tedious tasks
            into small automations.
          </p>
        </article>
      </section>

      <section className="team-habits-section">
        <div className="section-heading">
          <p className="eyebrow">Team habits</p>
          <h2>The kind of engineer I would want to work with.</h2>
        </div>
        <div className="team-habits-grid">
          {teamHabits.map((item) => (
            <article className="glass-panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-capability-section">
        <div className="section-heading">
          <p className="eyebrow">Working style</p>
          <h2>Where I tend to create leverage.</h2>
        </div>
        <div className="about-capability-grid">
          {capabilityCards.map((item) => (
            <article className="glass-panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>The resume details, with the context left in.</h2>
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
          <h2>Tools I have used to get those flows over the line.</h2>
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
          <h2>The inputs that keep the engineering brain curious.</h2>
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
