import "./Footer.css";

function Footer({ profile, usedFallback }) {
  return (
    <footer className="footer">
      {usedFallback && (
        <div className="footer-warning">
          // backend API not detected — showing fallback content
        </div>
      )}
      © {new Date().getFullYear()} {profile.name}. Built with React + Node/Express.
    </footer>
  );
}

export default Footer;