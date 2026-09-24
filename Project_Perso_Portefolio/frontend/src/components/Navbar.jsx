function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="navbar">
      <button
        className="logo"
        onClick={() => scrollToSection("home")}
      >
        MN<span>.</span>
      </button>

      <nav className="nav-links">
        <button onClick={() => scrollToSection("home")}>
          Accueil
        </button>

        <button onClick={() => scrollToSection("projects")}>
          Projets
        </button>

        <button onClick={() => scrollToSection("about")}>
          À propos
        </button>

        <button onClick={() => scrollToSection("contact")}>
          Contact
        </button>
      </nav>

      <button
        className="nav-button"
        onClick={() => scrollToSection("contact")}
      >
        Me contacter
      </button>
    </header>
  );
}

export default Navbar;