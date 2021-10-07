import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <h1>Juan Camilo Arenas</h1>
        <p>Bogotá DC</p>
      </div>
      <div className="footer-contact">
        <h3>Contacto</h3>
      </div>
      <div className="footer.sns">
        <div className="sns-links">
          <div className="redes-s">Redes Sociales</div>
          <a
            href="https://www.facebook.com/juan.c.arenas.90/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/juancarenas20/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram instagram"></i>
          </a>
          <a
            href="https://github.com/Juanocuato25"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
