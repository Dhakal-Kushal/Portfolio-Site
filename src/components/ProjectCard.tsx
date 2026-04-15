import React from 'react';

interface ProjectProps {
  project: {
    title: string;
    tech: string[];
    description: string;
    impact: string;
    link: string;
  };
}

export const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <article className="project-card">
      <div className="card-header">
        <h3>{project.title}</h3>
        <div className="tech-stack">
          {project.tech.map((techItem, index) => (
            <span key={index} className="tech-badge">
              {techItem}
            </span>
          ))}
        </div>
      </div>

      <div className="card-body">
        <p>{project.description}</p>
        <p className="impact-text">
            {project.impact}
        </p>
      </div>

      <div className="card-footer">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="source-link">
          View Source Code →
        </a>
      </div>
    </article>
  );
};