import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import ProjectDetail from "./Components/Portfolio/ProjectDetail";
import { commandActions } from "./Components/Portfolio/projectData";
import resumeFile from "./Components/Home/images/Javier-Marin-Software-Engineer-Resume-2026.pdf";

function AppNav({ onOpenPalette }) {
  const location = useLocation();
  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Work", to: "/portfolio" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="app-header">
      <Link className="brand-lockup" to="/" aria-label="Javier Marin home">
        <span>JM</span>
        <strong>Javier Marin</strong>
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <Link
            key={link.to}
            className={location.pathname === link.to ? "active" : ""}
            to={link.to}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button className="command-trigger" type="button" onClick={onOpenPalette}>
        <span>Search actions</span>
        <kbd>Ctrl K</kbd>
      </button>
    </header>
  );
}

function CommandPalette({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  function handleAction(action) {
    if (action.target === "resume") {
      window.open(resumeFile, "_blank", "noopener,noreferrer");
      onClose();
      return;
    }

    window.location.href = action.target;
  }

  return (
    <div className="palette-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="command-palette"
        aria-label="Command palette"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="palette-input-row">
          <span aria-hidden="true">/</span>
          <p>Run a portfolio command</p>
          <button type="button" onClick={onClose} aria-label="Close command palette">
            Esc
          </button>
        </div>

        <div className="palette-actions">
          {commandActions.map((action) => (
            <button key={action.command} type="button" onClick={() => handleAction(action)}>
              <strong>{action.command}</strong>
              <span>{action.description}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function AppShell() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      const isCommandKey = event.metaKey || event.ctrlKey;

      if (isCommandKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsPaletteOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setIsPaletteOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="site-frame">
      <div className="ambient-grid" aria-hidden="true"></div>
      <AppNav onOpenPalette={() => setIsPaletteOpen(true)} />
      <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/portfolio" component={Portfolio} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/:slug" component={ProjectDetail} exact />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
