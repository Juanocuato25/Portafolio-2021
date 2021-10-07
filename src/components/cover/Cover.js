import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverImagen.jpg";

const Cover = () => {
  return (
    <div className="cover-container">
      <img className="imagen" src={coverVideo} />
      <h1>Juan Camilo Arenas</h1>
      <p>Estudiante de Ingenieria de sistemas</p>
    </div>
  );
};

export default Cover;
