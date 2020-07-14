import React from 'react'
import email from '../images/email-icon.png'
import phone from '../images/phone-icon.png'
import linkedin from '../images/linkedin-icon.png'
import curriculum from '../images/cv-icon.png'
import detail from "../images/detail_1.png"
import cv from '../images/cv-tania-silva.pdf'

function contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <h3>Contáctame</h3>
        <h4>Si quieres saber más o trabajar conmigo ¡escríbeme!</h4>
        <img
          src={detail}
          alt="detail"
          className="about-detail"
        />
        <ul>
          <li>
            <img
              src={email}
              alt="email"
            />
            <h4>
              tania.tala.s@gmail.com
            </h4>
          </li>
          <li>
            <img
              src={phone}
              alt="Phone"
            />
            <h4>
              +56 963433765
            </h4>
          </li>
          <li>
            <img
              src={linkedin}
              alt="LinkedIn"
            />
            <h4>
              <a
                href="https://www.linkedin.com/in/taniasilvatala/"
                target="_blank"
                rel="noopener noreferrer">
                Perfil LinkedIn
              </a>
            </h4>
          </li>
          <li>
            <img
              src={curriculum}
              alt="Curriculum Vitae"
            />
            <h4>
              <a href={cv} target="/blank">
                CV
              </a>
            </h4>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default contact
