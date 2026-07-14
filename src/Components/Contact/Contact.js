import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const initialStatus = {
  tone: "idle",
  message:
    "I am open to software engineering roles focused on customer-facing systems, internal platforms, integrations, and measurable product impact.",
};

function Contact() {
  const [status, setStatus] = useState(initialStatus);
  const [isSending, setIsSending] = useState(false);

  function sendEmail(event) {
    event.preventDefault();
    setIsSending(true);
    setStatus({ tone: "idle", message: "Sending message through the relay..." });

    emailjs
      .sendForm(
        "service_qofzyvw",
        "template_28vydm8",
        event.target,
        "user_gMw290SR4jHVVSbqWArD0"
      )
      .then(() => {
        setStatus({ tone: "success", message: "Message sent. Thanks for reaching out." });
        event.target.reset();
      })
      .catch(() => {
        setStatus({
          tone: "error",
          message:
            "The form hit an issue. You can still reach me through LinkedIn or GitHub.",
        });
      })
      .finally(() => setIsSending(false));
  }

  return (
    <main className="page-shell contact-page">
      <section className="contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Send a signal.</h1>
        <p>
          Have a software engineering role, product platform, or complex
          workflow worth talking through? Send the context and I will get back
          to you.
        </p>
      </section>

      <section className="contact-layout">
        <form className="contact-form glass-panel" onSubmit={sendEmail}>
          <label>
            Name
            <input name="name" required />
          </label>
          <label>
            Email address
            <input type="email" name="email" required />
          </label>
          <label>
            Subject
            <input name="subject" required />
          </label>
          <label>
            Message
            <textarea rows={6} name="message" required />
          </label>

          <button className="button button-primary" type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send message"}
          </button>
        </form>

        <aside className={`contact-console glass-panel ${status.tone}`} aria-live="polite">
          <div className="console-header">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="console-lines">
            <span>contact.channel</span>
            <span>status: {status.tone}</span>
            <span>focus: scalable systems, frontend architecture, backend integrations</span>
            <span>{status.message}</span>
          </div>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/javier-j-marin/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/jaym832" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Contact;
