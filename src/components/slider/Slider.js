import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "./Slider.css";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-titulo">
        <h2>Proyectos</h2>
      </div>
      <Carousel
        arrows
        slidesPerPage={2}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={300}
        slides={Slides}
      />
      
    </div>
  );
};

export default Slider;
