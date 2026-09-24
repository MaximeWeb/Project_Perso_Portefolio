function About() {
  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "REST API",
    "Git",
    "HTML / CSS",
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div>
          <p className="section-label">À PROPOS</p>

          <h2 className="about-title">
            Développer, apprendre,
            <span> progresser.</span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            Développeur web passionné par la création d'applications
            modernes, je développe des projets full-stack en mettant
            l'accent sur l'expérience utilisateur et la qualité du code.
          </p>

          <p>
            J'aime transformer une idée en une application fonctionnelle,
            du développement de l'interface React jusqu'à la conception
            d'une API REST et son intégration avec une base de données.
          </p>

          <div className="skills">
            {skills.map((skill) => (
              <div className="skill" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;