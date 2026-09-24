function Hero() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">DÉVELOPPEUR FULL STACK</p>

        <h1>
          Je transforme des idées en
          <span> expériences digitales.</span>
        </h1>

        <p className="hero-description">
          Je développe des applications web modernes avec React,
          Node.js, Express et MongoDB.
        </p>

        <div className="hero-actions">
          <button
            className="button-primary"
            onClick={() => scrollToSection("projects")}
          >
            Découvrir mes projets
          </button>

          <button
            className="button-secondary"
            onClick={() => scrollToSection("contact")}
          >
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

