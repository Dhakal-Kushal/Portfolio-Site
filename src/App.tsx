import './App.css';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <h1>Kushal Dhakal</h1>
        <h2>Systems & Full-Stack Software Engineer</h2>
        <p className="value-prop">
          I am studying Computer Science and Software Engineering at the University of Central Florida. 
          Through my coursework and projects, I have developed a strong foundation in software development, algorithms, and data structures.
          I am actively seeking opportunities where I can expand on my skills and contribute to meaningful projects.
        </p>
        <div className="hero-links">
          <a href="https://github.com/Dhakal-Kushal" target="_blank" rel="noopener noreferrer" className="btn outline">GitHub</a>
          <a href="https://www.linkedin.com/in/kushal-dhakal-127772227/" target="_blank" rel="noopener noreferrer" className="btn outline">LinkedIn</a>
          <a href="Kushal Dhakal.pdf" target="_blank" rel="noopener noreferrer" className="btn solid">View Resume</a>
        </div>
      </header>

      <main className="projects-section">
        
        <h2 className="section-title">Featured Projects</h2>
        <h3 > Visit the source code to learn more and view the demos</h3>
        <br></br>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>

      <footer>
        <p>Contact: Kushald592@gmail.com | 407-446-8467</p>
      </footer>
    </div>
  );
}

export default App;