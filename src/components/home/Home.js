import React, { useState } from "react";
import './Home.css'
import logo from "../../img/home/logo.png";
// import { useTranslation } from "react-i18next";

function Home() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 0);
  });

  const [show, setShow] = useState(true);

  // Toggle Menu

  // const { t, i18 } = useTranslation();
  // const [languageConst, setLanguageConst] = useState("English");

  // const changeLanguage = () => {
  //   if (languageConst == "Português") {
  //     setLanguageConst("English");
  //     // i18.changeLanguage('en')
  //   } else {
  //     setLanguageConst("Português");
  //     // i18.changeLanguage('pt')
  //   }
  // };
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" className="logo__image" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>{" "}
              </a>
              <a href="#About">
                {" "}
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Projects">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Experiences">
                <li className="nav__items mx__15">Experiences</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toggle Menu */}
          <div className="toggle__menu">
            <i class="uil uil-bars pointer" onClick={() => setShow(!show)}></i>
          </div>
          {show?(
          <div className="sideNavbar">
            <ul className="sidebar d__flex">
              <li className="sideNavbar">
                <a href="#Home">Home</a>
              </li>
              <li className="sideNavbar">
                <a href="#About">About</a>
              </li>
              <li className="sideNavbar">
                <a href="#Services">Services</a>
              </li>
              <li className="sideNavbar">
                <a href="#Projects">Projects</a>
              </li>
              <li className="sideNavbar">
                <a href="#Experiences">Experiences</a>
              </li>
              <li className="sideNavbar">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          ): null}

          {/* <button className="language__button" onClick={changeLanguage}>
            {languageConst}
          </button> */}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text px__10">WELCOME TO MY WORLD.</h1>
              <h2 className="home__text px__10">Hello, I'm Gabi!</h2>
              <h3 className="home__text sweet">
                FrontEnd Development and Business Intelligence
              </h3>
              {/* <h4 className="home__text pz__10">Sempre em evolução.</h4> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
