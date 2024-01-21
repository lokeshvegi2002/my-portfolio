import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'DrumKit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://example.com/project1',
      codeLink: 'https://github.com/username/project1',
    },
    {
      title: 'SimenGame',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://example.com/project2',
      codeLink: 'https://github.com/username/project2',
    },
    {
      title: 'Simen',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://example.com/project2',
      codeLink: 'https://github.com/username/project2',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
