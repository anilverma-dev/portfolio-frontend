import { useTypewriter } from "../hooks/useTypewriter";
import "./Hero.css";

function Hero({ profile }) {
  const lines = [
    { type: "com", text: "// loading developer profile..." },
    { type: "raw", text: "const dev = {" },
    { type: "obj", key: "name", val: profile.name },
    { type: "obj", key: "role", val: profile.role },
    { type: "obj", key: "based_in", val: profile.location },
    { type: "raw", text: "};" },
    { type: "com", text: `console.log(dev.tagline); // "${profile.tagline}"` },
  ];

  const flat = lines.map((l) => ({
    type: l.type === "obj" ? "obj" : l.type,
    text: l.type === "obj" ? `  ${l.key}: "${l.val}",` : l.text,
  }));

  const { output, done } = useTypewriter(flat, 16);

  return (
    <section className="hero container">
      <div>
        <div className="eyebrow">
          <span className="dot"></span> AVAILABLE FOR FREELANCE / FULL-TIME WORK
        </div>
        <h1>
          Hi, I'm <span className="accent">{profile.name}</span>
        </h1>
        <p className="role">{profile.role}</p>
        <p className="lead">
          {profile.tagline} Scroll down to see my bio, skills, and a few things I've shipped.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#projects">
            View Projects →
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="terminal" role="img" aria-label="Animated terminal showing developer profile JSON">
        <div className="terminal-bar">
          <span className="tdot" style={{ background: "#FF5F56" }}></span>
          <span className="tdot" style={{ background: "#FFBD2E" }}></span>
          <span className="tdot" style={{ background: "#27C93F" }}></span>
          <span className="terminal-title">bash — profile.js</span>
        </div>
        <div className="terminal-body">
          {output.map((line, i) => {
            if (!line) return null;
            if (line.type === "com") {
              return (
                <div key={i} className="tk-com">
                  {line.text}
                </div>
              );
            }
            if (line.type === "raw") {
              return (
                <div key={i}>
                  <span className="tk-fn">{line.text}</span>
                </div>
              );
            }
            const match = line.text.match(/^\s*([a-z_]+):\s*"(.*?)"?,?$/);
            return (
              <div key={i}>
                {match ? (
                  <>
                    &nbsp;&nbsp;<span className="tk-key">{match[1]}</span>:{" "}
                    <span className="tk-str">
                      "{match[2]}
                      {line.text.endsWith('",') ? '"' : ""}
                    </span>
                    ,
                  </>
                ) : (
                  line.text
                )}
              </div>
            );
          })}
          {!done && <span className="caret"></span>}
        </div>
      </div>
    </section>
  );
}

export default Hero;
