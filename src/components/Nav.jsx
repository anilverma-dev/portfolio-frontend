import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">
          ~/portfolio<span>.dev</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
