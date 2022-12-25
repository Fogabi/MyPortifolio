import React, { useState } from "react";
import './Home.css'
import logo from "../../img/home/logo.png";

function Home() {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 0);
  });

  const [show, setShow] = useState(false);

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
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#Home" onClick={() => setShow(false)}>
                    Home
                  </a>
                </li>
                <li className="sideNavbar">
                  <a href="#About" onClick={() => setShow(false)}>
                    About
                  </a>
                </li>
                <li className="sideNavbar">
                  <a href="#Services" onClick={() => setShow(false)}>
                    Services
                  </a>
                </li>
                <li className="sideNavbar">
                  <a href="#Projects" onClick={() => setShow(false)}>
                    Projects
                  </a>
                </li>
                <li className="sideNavbar">
                  <a href="#Experiences" onClick={() => setShow(false)}>
                    Experiences
                  </a>
                </li>
                <li className="sideNavbar">
                  <a href="#Contact" onClick={() => setShow(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
