import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">~/portfolio<span>.dev</span></div>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#about" onClick={close}>about</a></li>
          <li><a href="#projects" onClick={close}>projects</a></li>
          <li><a href="#contact" onClick={close}>contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;