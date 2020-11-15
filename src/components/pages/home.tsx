import React, { ReactElement, useEffect, useState } from "react";
import "../../styles/pages/home.scss";
import BackgroundImg from "../../assets/home.jpg";
import UnderConstruction from "../under-construction";
import { FadeIn } from "../shared/fade-in";

const Home = (): ReactElement => {
  const MAX_OPACITY_WIDTH = 1200;
  const [opacity, setOpacity] = useState(
    window.innerWidth >= MAX_OPACITY_WIDTH ? 1 : window.innerWidth / MAX_OPACITY_WIDTH
  );

  useEffect(() => {
    function handleWindowResize() {
      setOpacity(
        window.innerWidth >= MAX_OPACITY_WIDTH
          ? 1
          : window.innerWidth / MAX_OPACITY_WIDTH
      );
    }
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <main className="home">
      <div>
        <FadeIn
        whenLoaded
          forwards={{ initialDelay: 0, delay: 500 }}
        >
          <h1 className="m-0">Hi, I&apos;m Jesse</h1>
          <h2 className="mb-4">A full-stack web developer based in Toronto</h2>
          <UnderConstruction />
        </FadeIn>
      </div>
      <img
        style={{ opacity: opacity }}
        src={BackgroundImg}
        alt=""
        role="presentation"
        className="background-image"
      />
    </main>
  );
};

export default Home;
