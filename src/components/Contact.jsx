import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "sending", msg: "// sending..." });
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus({ state: "ok", msg: `// ${data.message}` });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        state: "err",
        msg: `// backend not reachable — message not sent. (${err.message})`,
      });
    }
  }

  return (
    <section className="section container" id="contact">
      {/* Hidden SVG gradient def reused by the Instagram icon for its real brand gradient */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="25%" stopColor="#FCAF45" />
            <stop offset="50%" stopColor="#E1306C" />
            <stop offset="75%" stopColor="#C13584" />
            <stop offset="100%" stopColor="#833AB4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="section-head">
        <span className="section-tag">03 / contact</span>
        <h2>Let's Work Together</h2>
      </div>
      <div className="contact-panel">
        <div className="contact-info">
          <h2>Say hello 👋</h2>
          <p className="lead">
            Have a project in mind, or just want to talk shop? My inbox is always open — I try
            to reply within a day or two.
          </p>
          <div className="social-row">
            <a
              className="social-icon social-github"
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              className="social-icon social-linkedin"
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              className="social-icon social-instagram"
              href={profile.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="submit-btn" type="submit" disabled={status.state === "sending"}>
            {status.state === "sending" ? "Sending..." : "Send Message"}
          </button>
          <div
            className={`form-status ${
              status.state === "ok" ? "ok" : status.state === "err" ? "err" : ""
            }`}
          >
            {status.msg}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
