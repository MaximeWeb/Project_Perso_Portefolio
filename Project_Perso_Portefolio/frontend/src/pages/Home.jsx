import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

import { getProjects } from "../services/projectService.js";

function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="projects-section" id="projects">
          <div className="section-header">
            <p className="section-label">MES RÉALISATIONS</p>

            <h2>
              Des projets pensés pour
              <span> résoudre des problèmes.</span>
            </h2>
          </div>

          {loading && <p>Chargement des projets...</p>}

          {error && <p>Erreur : {error}</p>}

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
              />
            ))}
          </div>
        </section>

        <About />

        <Contact />
      </main>
    </>
  );
}

export default Home;