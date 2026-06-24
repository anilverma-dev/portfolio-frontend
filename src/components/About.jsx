import "./About.css";

function About({ profile }) {
  return (
    <section className="section container" id="about">
      <div className="section-head">
        <span className="section-tag">01 / about</span>
        <h2>Bio &amp; Skillset</h2>
      </div>
      <div className="about-grid">
        <div>
          <p>{profile.about}</p>
          <ul className="info-list">
            <li>
              <b>Location:</b> {profile.location}
            </li>
            <li>
              <b>Email:</b> {profile.email}
            </li>
            <li>
              <b>Phone:</b> {profile.phone}
            </li>
          </ul>
        </div>
        <div className="skills-panel">
          <div className="label">// tech I work with</div>
          <div className="pill-wrap">
            {profile.skills.map((s) => (
              <span className="pill" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
