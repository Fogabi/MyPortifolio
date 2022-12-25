import React from "react";
import "./Projects.css";
import Project1 from "../../img/projects/project1.png";
import Project2 from "../../img/projects/project2.png";
import Project3 from "../../img/projects/project3.png";

function Project() {
  return (
    <div className="project component__space" id="Projects">
      <div className="heading">
        <h1 className="heading">My Last Projects</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} className="project__img" alt=""></img>
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Insta Project</h5>
                <h4 className="project__text">Instagram features</h4>
                <a
                  href="https://projetoinsta.surge.sh/"
                  className="project__btn"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} className="project__img" alt=""></img>
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">4Safe Seguros Website</h5>
                <h4 className="project__text">Insurance company</h4>
                <a href="http://4safe.surge.sh/" className="project__btn">
                  View project
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} className="project__img" alt=""></img>
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Whatsapp Project</h5>
                <h4 className="project__text">WhatsApp features</h4>
                <a href="https://whatslab1.surge.sh/" className="project__btn">
                  View project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
