import React, { useEffect } from "react";
import "./About.css";
// import Service from "../Service/Service";
// import Clients from "../Clients/Clients";
import Skills from "../Resume/Skills/Skills";
import useTitle from "../../hook/useTitle";

const About = () => {
  useTitle("About")
  // { toggleTheme }
  return (
    // toggleTheme={toggleTheme}
    <div className="about active article">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          {/* I am a frontend developer with over 2 years of experience, and I also
          have knowledge of backend technologies. I have a proven ability to
          work both independently and collaboratively with cross-functional
          teams to deliver high-quality, modern, responsive, and scalable
          applications. My expertise lies in web development, where I have
          gained proficiency in HTML, CSS, JavaScript, ReactJS, Redux, Express,
          Node.js, MongoDB, Tailwind CSS, Bootstrap, Material-UI, Git, and
          Postman. I take pride in developing user-friendly and responsive web
          applications that provide an excellent user experience. As a proactive
          problem solver, I pay strong attention to detail and strive to deliver
          high-quality solutions. I am passionate about staying up-to-date with
          the latest technologies and continuously improving my skills. I am
          excited about new challenges and opportunities to contribute my skills
          and expertise to create innovative and impactful web applications. */}
          &nbsp;&nbsp;&nbsp;&nbsp;I am a <span>frontend developer</span> with
          over <span>2 years of experience</span>, and I also have knowledge of{" "}
          <span>backend technologies</span>. I have a proven ability to work
          both <span>independently and collaboratively</span> with
          cross-functional teams to deliver high-quality, modern, responsive,
          and scalable applications. <br />
          &nbsp;&nbsp;&nbsp;&nbsp; My expertise lies in{" "}
          <span>web development</span>, where I have gained proficiency in{" "}
          <span>
            HTML, CSS, JavaScript, ReactJS, Redux, Express, Node.js, MongoDB,
            Tailwind CSS, Bootstrap, Material-UI, Git, and Postman.
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; I take pride in developing{" "}
          <span>user-friendly and responsive web applications</span> that
          provide an excellent <span>user experience</span>. As a{" "}
          <span>proactive problem solver</span>, I pay strong attention to
          detail and strive to <span> deliver high-quality solutions</span>.{" "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; I am passionate about staying{" "}
          <span> up-to-date with the latest technologies </span>
          and continuously improving my skills. I am excited about new
          challenges and opportunities to contribute my skills and expertise to
          create innovative and impactful web applications.
        </p>
      </section>
      <Skills />
      {/* <Service />
      <Clients/> */}
    </div>
  );
};

export default About;
