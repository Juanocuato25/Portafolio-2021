import React, { useEffect, useState } from "react";
import "./App.css";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from './components/slider/Slider'
import Footer from "./components/footer/Footer";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const positions = window.pageYOffset;
    setScrollHeight(positions);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll());
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About/>
      <Slider/>
      < Footer/>
    </div>
  );
}

export default App;
