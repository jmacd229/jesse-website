import React, { ReactElement, useEffect, useState } from "react";
import "../../styles/pages/home.scss";
import BackgroundImg from "../../assets/home.jpg";
import UnderConstruction from "../under-construction";

const Home = (): ReactElement => {
  const MAX_OPACITY_WIDTH = 1200;
  const [opacity, setOpacity] = useState(MAX_OPACITY_WIDTH ? 1 : window.innerWidth / MAX_OPACITY_WIDTH);

  useEffect(() => {
    function handleWindowResize() {
      setOpacity(window.innerWidth >= MAX_OPACITY_WIDTH ? 1 : window.innerWidth / MAX_OPACITY_WIDTH);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="home">
      <div>
        <h1 className="m-0">Hi, I&apos;m Jesse</h1>
        <h2 className="mb-4">A full-stack web developer based in Toronto</h2>
        <UnderConstruction />
      </div>
      <img style={{opacity: opacity}} src={BackgroundImg} className="background-image" />
    </div>
  );
};

export default Home;
