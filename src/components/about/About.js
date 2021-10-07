import React from "react";
import "./About.css";
import aboutImage from "../../media/IMG_0893.JPG"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-me">
        <h3>¿Quien Soy?</h3>
        <p>
          Hola, soy estudiante de ingeniería de sistemas en la universidad Jorge
          Tadeo Lozano sede Bogotá, me apasiona mi carrera, deseo ser un
          excelente desarrollador web y desktop, me gusta compartir con mi
          familia y mi novia <strong>(Tal como lo leíste, estudio sistemas y tengo
          novia)</strong>, además me gusta jugar futbol, ping pong, además de compartir
          tiempo con mi familia y salir a comer con amigos.
        </p>
      </div>
      <div className="about-img">
            <img src={aboutImage} alt="about"/>
      </div>
    </div>
  );
};

export default About;
