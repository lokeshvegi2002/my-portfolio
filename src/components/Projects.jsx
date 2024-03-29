import React from 'react';

const Projects = () => {
  const projects = [
   
    {
      title: 'SimenGame',
      description: 'Built a siemen game which has certain instruction to play',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://simengame.netlify.app/',
      codeLink: 'https://github.com/lokeshvegi2002/simen_game',
      image: `${process.env.PUBLIC_URL}/images/simen.png`,
    },
    {
      title: 'Drumkit',
      description: 'Built a drumkit which has differnt drums play according to the respective drum while tapping',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'drum-kitt45.netlify.app',
      codeLink: 'https://github.com/lokeshvegi2002/drumkit',
      image: `${process.env.PUBLIC_URL}/images/drumkit.png`,
    },
    {
      title: 'DieceGame',
      description: 'Built a multiplayer game using die',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://diecegame10.netlify.app',
      codeLink: 'https://github.com/lokeshvegi2002/diece_game',
      image: `${process.env.PUBLIC_URL}/images/dicegame.png`,
    },
    {
      title: 'GrocerystoreManagementsystem',
      description: 'Built a user-friendly grocery store management system to efficiently handle inventory, sales, and customer data optimizing overall store operations.',
      technologies: ['HTML', 'CSS', 'JavaScript','PHP','MYSQL'],
      liveLink: 'https://example.com/project1',
      codeLink: 'https://github.com/lokeshvegi2002/Grocerystore_management_system',
      image: `${process.env.PUBLIC_URL}/images/grocerystore.png`,
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
            <img src={project.image} alt={project.title} className="project-image" />
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
