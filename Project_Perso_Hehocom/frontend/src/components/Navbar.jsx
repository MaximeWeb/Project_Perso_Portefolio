function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="logo">
        MN<span>.</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Accueil</a>
        <a href="#projects">Projets</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-button">
        Me contacter
      </a>
    </header>
  );
}

export default Navbar;