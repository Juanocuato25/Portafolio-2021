import React from "react";
import "./Slider.css";
const slidesInfo = [
  {
    a: "https://github.com/Juanocuato25/React-Api-Pokedex",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaG4ghpZ_XCdEkIqu7pvpA64qP_EifnLxn4w&usqp=CAU",
    alt: "Proyecto 1",
    desc: "Pokedex Api React",
  },
  {
    a: "https://github.com/Juanocuato25/React-api-HarryPotter",
    src: "https://i.pinimg.com/236x/75/f9/fb/75f9fbc728e718398f0d7b1719b83742.jpg",
    alt: "Proyecto 1",
    desc: "Harry Potter Api React",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slides-container">
    <a href={slide.a} target="_blank">
      <img src={slide.src} alt={slide.alt} />
    </a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
