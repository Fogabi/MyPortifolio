import React from "react";
import "./About.css";
import aboutImg from "../../img/about/image2_baw.jpeg";
import CV from '../../img/about/gabriela_cv.pdf'

function About() {
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row about__row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img"></img>
          </div>
          <div className="col__2 part__2">
            <h1 className="about__heading">About me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                My name is Gabriela Fogaça, a Computer Science student at the
                University of the People. Currently working as a Technical
                Specialist at idwall, a fraud prevention company.
              </p>
              <p className="about__text p__color">
                I started my career in 2016 at the age of 16 as an intern at the
                Court of Domestic and Family Violence Against Women - Court
                of Justice of São Paulo. This experience took me in 2019 to the
                legal department of Quero Educação, where I worked as a
                Litigation Analyst for 2 years and had my first contact with
                technology through proximity to the Development and Product
                teams. It was then that I decided to migrate from the area to
                Technology.
              </p>
              <p className="about__text p__color">
                I started studying Front-End Development through courses and
                Bootcamps in January 2021, and in April 2021 I joined the
                Systems team at the education company Descomplica as a Business
                Analyst, where I worked until March 2022, when I accepted the
                proposal to the role of Technical Specialist at idwall.
              </p>
              <p className="about__text p__color">
                My biggest goal is find out ways to use the technology as a
                means of making the world a better place.
              </p>
              <p className="about__text p__color">
                Read more about my experiences on the tab "Experiences".
              </p>
              <div className="about__button d__flex align__items__center">
                <a href={CV} download="">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="https://www.linkedin.com/in/gabriela-foga%C3%A7a-864261174/">
                  <button className="about btn pointer">Linkedin</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
