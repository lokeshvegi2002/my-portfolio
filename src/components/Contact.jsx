import React from 'react';
const linkedin = `${process.env.PUBLIC_URL}/images/linkedin.png`;
const github = `${process.env.PUBLIC_URL}/images/github.png`;
const x = `${process.env.PUBLIC_URL}/images/x.png`;
const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me. I'm available for collaboration and discussions.</p>
      <div className="contact-details">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>Email: lokeshvegi7780@gmail.com</p>
          <p>Location: visakhapatnam, india</p>
        </div>
      </div>
       {/* Social Media Links */}
       <div className="social-media-links">
        <a href="https://twitter.com/lokesh2_vegi" target="_blank" rel="noopener noreferrer"> <img src={x} alt="Twitter" /></a>
        <a href="https://www.linkedin.com/in/vegi-lokesh-885176247" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
        <a href="https://github.com/lokeshvegi2002" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
        {/* Add more social media links as needed */}
      </div>
    </section>
  );
};

export default Contact;
