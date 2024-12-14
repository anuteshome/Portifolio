import React, { useState } from 'react';
import './project.css';

function Project() {
  // State holding project data
  const [projects, setProjects] = useState([
    {
      name: "Sabroso",
      link: "https://sabrosoo.netlify.app/",
      image: "https://via.placeholder.com/150?text=Sabroso" // Replace with actual image URL
    },
    {
      name: "AK SITES",
      link: "https://aksitess.netlify.app/#",
      image: "https://via.placeholder.com/150?text=AK+Sites" // Replace with actual image URL
    }
  ]);

  return (
    <div className="project-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          {/* Project Image */}
          <img
            src={project.image}
            alt={`${project.name} Screenshot`}
            className="project-image"
          />
          {/* Project Title */}
          <h3 className="project-title">{project.name}</h3>
          {/* Project Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Project
          </a>
        </div>
      ))}
    </div>
  );
}

export default Project;
