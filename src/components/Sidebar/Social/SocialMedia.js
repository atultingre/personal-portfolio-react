import React from "react";
import "./SocialMedia.css";
import {
  BsDownload,
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div>
      <div className="separator"></div>
      <ul className="social-list">
        <li className="social-item">
          <a
            href="https://www.linkedin.com/in/atultingre/"
            target="_blank"
            rel="noreferrer"
            className="social-link">
            <div className="ion-icon">
              <BsLinkedin />
            </div>
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.instagram.com/atult_4568/"
            target="_blank"
            rel="noreferrer"
            className="social-link">
            <div className="ion-icon">
              <BsInstagram />
            </div>
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://github.com/atultingre"
            target="_blank"
            rel="noreferrer"
            className="social-link">
            <div className="ion-icon">
              <BsGithub />
            </div>
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://www.facebook.com/atultingre18"
            target="_blank"
            rel="noreferrer"
            className="social-link">
            <div className="ion-icon">
              <BsFacebook />
            </div>
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://drive.google.com/file/d/1Ar35Y5tMb8SsEjuyM4d2cgv08ugVyi89/view?usp=sharing"
            download="https://drive.google.com/file/d/1Ar35Y5tMb8SsEjuyM4d2cgv08ugVyi89/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="social-link">
            <div className="ion-icon">
              <BsDownload />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
