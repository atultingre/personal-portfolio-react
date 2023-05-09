import React from "react";
import "./About.css";
// import Service from "../Service/Service";
// import Clients from "../Clients/Clients";
import Skills from "../Resume/Skills/Skills";

const About = () => {
  // { toggleTheme }
  return (
    // toggleTheme={toggleTheme}
    <div className="about active article" >
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          As a recent post graduate with a strong foundation in front-end
          development, I possess knowledge of backend technologies and am eager
          to learn and grow in this field. I am a dedicated and collaborative
          team player with the ability to work independently and deliver
          high-quality, modern, responsive, and scalable applications. Through
          my coursework and personal projects, I have gained experience with
          front-end technologies like HTML, CSS, and JavaScript, and am excited
          to apply these skills to create visually appealing and user-friendly
          interfaces. Additionally, I am eager to expand my knowledge of backend
          technologies such as Node.js and MongoDB to build robust and scalable
          web applications. I am committed to staying up-to-date with the latest
          trends and best practices in web development, and am passionate about
          delivering innovative solutions that exceed expectations.
        </p>
      </section>
      <Skills />
      {/* <Service />
      <Clients/> */}
    </div>
  );
};

export default About;
