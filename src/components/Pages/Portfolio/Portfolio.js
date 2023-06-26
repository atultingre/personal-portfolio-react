import "./Portfolio.css";
import { BsEyeFill } from "react-icons/bs";
import Projects from "./Projects.json";
import useTitle from "../../hook/useTitle";
const Portfolio = () => {
  useTitle("Portfolio")
  return (
    <div className="portfolio article">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="project">
        <ul className="project-list">
          {Projects.map((project, index) => (
            <div key={index}>
              <li className="project-item active">
                <a href={project.url} target="_blank" rel="noreferrer">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <div className="ion-icon">
                        <BsEyeFill />
                      </div>
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
