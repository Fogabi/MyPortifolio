import React from "react";
import "./Contact.css";
import whatsapp from "../../img/contact/whatsapp.png";
import email from "../../img/contact/email.png";
import linkedin from "../../img/contact/linkedin.png";
import github from '../../img/contact/github.png'

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact_meta">
              <h1 hire__text>Hire me.</h1>
              <p className="hire__text white">
                I'm open for new opportunities. Contact me via e-mail:
              </p>
              <p className="hire__text white">
                <strong>gabifogaca.gabriela@gmail.com</strong> or
                WhatsApp/Telegram: <strong>+55 12 98217-1835</strong>. Or click
                on the icons to be directed directly to my contact:
              </p>
            </div>
            <div className="div__icons">
              <a href="https://wa.me/5512982171835">
                <img src={whatsapp} className="contact__icon"></img>
              </a>
              <a href="mailto: gabifogaca.gabriela@gmail.com">
                <img src={email} className="contact__icon"></img>
              </a>
              <a href="https://www.linkedin.com/in/gabriela-foga%C3%A7a-864261174/">
                <img src={linkedin} className="contact__icon"></img>
              </a>
              <a href="https://github.com/Fogabi">
                <img src={github} className="contact__icon"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
