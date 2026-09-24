function Hero() {
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
          <a href="#projects" className="button-primary">
            Découvrir mes projets
          </a>

          <a href="#contact" className="button-secondary">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;