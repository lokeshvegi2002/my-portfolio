import React from 'react';
const profileImage = `${process.env.PUBLIC_URL}/images/profile-pic.png`;
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={profileImage} alt="Profile" />
      <p>
        Hi, I'm Vegi Lokesh, a web developer based in disakhapatnam. I have experience
        in webdevelopment, and I am passionate about software development.
      </p>
      <p>
        I graduated from maharaj vijayaram gajapathi raj college of engineering with a degree in computer science and engineering, and
        I have worked on various projects involving HTML, CSS, JavaScript, React.
      </p>
      <p>
        In my free time, I enjoy coding.
      </p>
      <p>
        Feel free to explore my portfolio and get in touch!
      </p>
    </section>
  );
};

export default About;
