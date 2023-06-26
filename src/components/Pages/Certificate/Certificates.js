import React from "react";
import "./Certificates.css";
import Certificate from "./Certificate.json";
import { BsEyeFill } from "react-icons/bs";
import useTitle from "../../hook/useTitle";

const Certificates = () => {
  useTitle("Certificates")
  return (
    <>
      <div className="certificates article">
        <header>
          <h2 className="h2 article-title">Certificates</h2>
        </header>
        <section className="certificate">
          <ul className="certificate-list">
            {Certificate.map((cert, index) => (
              <div key={index}>
                <li className="certificate-item active">
                  <a href={cert.url} target="_blank" rel="noreferrer">
                    <figure className="certificate-img" >
                      <div className="certificate-item-icon-box">
                        <div className="ion-icon">
                          <BsEyeFill />
                        </div>
                      </div>
                      <img src={cert.image} alt={cert.title} loading="lazy"/>
                    </figure>
                    <h3 className="certificate-title">{cert.title}</h3>
                    <p className="certificate-category">{cert.category}</p>
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Certificates;
// "url": "https://drive.google.com/file/d/1-VJ2PDUDv80jA3LHjZPGS0DRyCQWEv8a/view"