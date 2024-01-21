import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'C++'],
    },
    {
      category: 'Web Technologies',
      skills: ['HTML', 'CSS', 'React', 'Node.js', 'Express'],
    },
    {
      category: 'Soft Skills',
      skills: ['Communication', 'Teamwork', 'Problem-solving'],
    },
    // Add more categories and skills as needed
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skill-categories">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.category}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
