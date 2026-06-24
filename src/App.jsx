import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FALLBACK_PROFILE } from "./fallbackData";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

function App() {
  const [profile, setProfile] = useState(null);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/profile`)
      .then((res) => {
        if (!res.ok) throw new Error("bad response");
        return res.json();
      })
      .then((data) => setProfile(data))
      .catch(() => {
        setUsedFallback(true);
        setProfile(FALLBACK_PROFILE);
      });
  }, []);

  if (!profile) {
    return <div className="state-msg container" style={{ paddingTop: 80 }}>// loading profile...</div>;
  }

  return (
    <>
      <div className="bg-glow"></div>
      <Nav />
      <Hero profile={profile} />
      <About profile={profile} />
      <Projects />
      <Contact profile={profile} />
      <Footer profile={profile} usedFallback={usedFallback} />
    </>
  );
}

export default App;
