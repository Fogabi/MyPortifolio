import React, { useState } from "react";
import "./Experiences.css";
import experience3 from "../../img/experiences/experience3.png";
import experience4 from "../../img/experiences/experience4.jpeg";
import experience5 from "../../img/experiences/experience5.jpeg";

function Experiences() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="experiences component__space" id="Experiences">
      <div className="heading">
        <h1 className="heading">My Last Experiences</h1>
        <p className="heading p__color">
          Click on the experience to view details
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={experience3} className="project__img" alt=""></img>
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="experience__meta absolute">
                <h5 className="project__text">Quero Educação</h5>
                <h4 className="project__text">Legal Department</h4>
                <button
                  className="experience project__btn btn"
                  onClick={() => toggleTab(1)}
                >
                  View details
                </button>
                <div
                  className={
                    toggleState === 1
                      ? "experiences__modal active-modal"
                      : "experiences__modal"
                  }
                >
                  <div className="experiences__modal-content">
                    <i
                      className="uil uil-times experiences__modal-close"
                      onClick={() => toggleTab(0)}
                    ></i>
                    <h3 className="experiences__modal-title">
                      Litigation Analyst
                    </h3>
                    <p className="experiences__modal-description">
                      Legal Department at Quero Educação
                      <br />
                      <br />
                      To view more details, please access my profile on
                      Linkedin!
                    </p>
                    <ul className="experiences__modal-experiences grid">
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Judicial Processes - Follow-up and organization
                        </p>
                      </li>
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Writing of judicial documents as defenses and
                          petitions
                        </p>
                      </li>
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Risk mitigation
                        </p>
                      </li>
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Cost reduction analysis
                        </p>
                      </li>
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Judicial and administrative processes payments
                        </p>
                      </li>
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Analysis and review of contracts
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={experience4} className="project__img" alt=""></img>
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="experience__meta absolute">
                <h5 className="project__text">Descomplica</h5>
                <h4 className="project__text">Business Intelligence</h4>
                <button
                  className="experience project__btn btn"
                  onClick={() => toggleTab(2)}
                >
                  View details
                </button>
                <div
                  className={
                    toggleState === 2
                      ? "experiences__modal active-modal"
                      : "experiences__modal"
                  }
                >
                  <div className="experiences__modal-content">
                    <i
                      className="uil uil-times experiences__modal-close"
                      onClick={() => toggleTab(0)}
                    ></i>
                    <h3 className="experiences__modal-title">
                      Business Analyst
                    </h3>
                    <p className="experiences__modal-description">
                      Processes and Systems Team at Descomplica
                      <br />
                      <br />
                      To view more details, please access my profile on
                      Linkedin!
                    </p>
                    <ul className="experiences__modal-experiences grid">
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Creation of reports and dashboards for business study
                          with PL/SQL and Oracle Analytics
                        </p>
                      </li>
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Business analysis in backoffice systems such as Oracle
                          Applications for financial and educational data
                        </p>
                      </li>
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Maintenance and management of data security and
                          systems governance
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={experience5} className="project__img" alt=""></img>
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="experience__meta absolute">
                <h5 className="project__text">idwall</h5>
                <h4 className="project__text">Technical Specialist</h4>
                <button
                  className="experience project__btn btn"
                  onClick={() => toggleTab(3)}
                >
                  View details
                </button>
                <div
                  className={
                    toggleState === 3
                      ? "experiences__modal active-modal"
                      : "experiences__modal"
                  }
                >
                  <div className="experiences__modal-content">
                    <i
                      className="uil uil-times experiences__modal-close"
                      onClick={() => toggleTab(0)}
                    ></i>
                    <h3 className="experiences__modal-title">
                      Technical Specialist
                    </h3>
                    <p className="experiences__modal-description">
                      Tech Experts Team
                      <br />
                      <br />
                      To view more details, please access my profile on
                      Linkedin!
                    </p>
                    <ul className="experiences__modal-experiences grid">
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Data analysis with PostgreSQL and MongoDB
                        </p>
                      </li>
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Understanding and maintenance of API's
                        </p>
                      </li>
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Data monitoring with Grafana, Datadog and Google Cloud
                          Plataform
                        </p>
                      </li>
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Integration of iOS and Android mobile apps with React
                          Native
                        </p>
                      </li>
                      <li className="experiences__modal-experience">
                        <i className="uil uil-check-circle experiences__modal-icon"></i>
                        <p className="experiences__modal-info">
                          Building Dashboards with Looker
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
