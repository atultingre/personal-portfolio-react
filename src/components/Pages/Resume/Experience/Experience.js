import React from "react";
// import "./Experience.css"
import { RiComputerFill } from "react-icons/ri";
import experience from "./Experience.json";

const Experience = () => {
  return (
    <div>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <RiComputerFill />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {experience.map((exp, ind) => (
            <li className="timeline-item" key={ind}>
              <h4 className="h4 timeline-item-title experience-title">
                {exp.position} || {exp.year}
              </h4>
              {/* <span>{exp.year}</span> */}

              {/* <p className="timeline-text">{exp.description}</p> */}
              <span>
                <strong> Work Experience:</strong>
              </span>
              <br />
              <p className="timeline-text"></p>
              <p className="timeline-text experience-text">
                <span>React JS Development:</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ Worked
                extensively on React JS to build modern, innovative, and
                interactive user interfaces.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ Contributed
                to backend improvement by creating new RESTful APIs and
                microservices, as well as optimizing existing ones.
                <br />
                <br />
                <span>Functionality Enhancement:</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ Analyzed
                requirements, documented specifications, and developed code to
                add new functionality to the client application.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔Developed the
                'Accounts' module for a client application, displaying recent
                transactions and account details retrieved using APIs.
                <br />
                <br />
                <span>Bug Fixing and Defect Tracking:</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ Conducted bug
                fixing for various functionalities of the client application,
                ensuring smooth operation and user satisfaction.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✔ Utilized JIRA
                for defect tracking, effectively managing and resolving issues.
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Experience;
