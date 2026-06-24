import React, { useState, useEffect } from 'react';
import { projectAPI } from '../services/api';
import '../styles/Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectAPI.getAllProjects();
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div className="container mt-5">Loading projects...</div>;

  return (
    <div className="projects-page">
      <div className="container py-5">
        <h1 className="mb-5">My Projects</h1>
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-6 mb-4" key={project._id}>
              <div className="card h-100 shadow-sm">
                {project.image && (
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies &&
                      project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="badge bg-primary me-2 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                  <div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary me-2"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-secondary"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
