import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const emailConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_539kjli",
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_ibtua9l",
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "sCkqpt56ZiaPMVdsl",
};

const initialStatus = {
  tone: "idle",
  message:
    "Useful context helps: team, product area, tech stack, and what problem you are trying to solve.",
};

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [status, setStatus] = useState(initialStatus);
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState(initialForm);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function sendEmail(event) {
    event.preventDefault();

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      setStatus({
        tone: "error",
        message:
          "Email service is missing configuration. LinkedIn and GitHub are still available below.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ tone: "idle", message: "Sending message through the relay..." });

    const templateParams = {
      name: form.name,
      from_name: form.name,
      email: form.email,
      reply_to: form.email,
      subject: form.subject,
      message: form.message,
    };

    emailjs
      .send(emailConfig.serviceId, emailConfig.templateId, templateParams, emailConfig.publicKey)
      .then(() => {
        setStatus({ tone: "success", message: "Message sent. Thanks for reaching out." });
        setForm(initialForm);
      })
      .catch((error) => {
        const detail = error?.text || error?.message || "EmailJS rejected the request.";
        setStatus({
          tone: "error",
          message: `The form hit an issue: ${detail} You can still reach me through LinkedIn or GitHub.`,
        });
      })
      .finally(() => setIsSending(false));
  }

  return (
    <main className="page-shell contact-page">
      <section className="contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Tell me what you are building.</h1>
        <p>
          I am most interested in teams that care about the quality of the
          workflow, not just the ticket count. Send the shape of the role or
          product problem and I will get back to you.
        </p>
      </section>

      <section className="contact-layout">
        <form className="contact-form glass-panel" onSubmit={sendEmail}>
          <label>
            Name
            <input name="name" value={form.name} onChange={updateField} required />
          </label>
          <label>
            Email address
            <input type="email" name="email" value={form.email} onChange={updateField} required />
          </label>
          <label>
            Subject
            <input name="subject" value={form.subject} onChange={updateField} required />
          </label>
          <label>
            Message
            <textarea rows={6} name="message" value={form.message} onChange={updateField} required />
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
            <span>best_threads: product teams, platform work, workflow tools</span>
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
