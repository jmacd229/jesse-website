import React, { useEffect, createRef, ReactElement } from "react";

import lottie from "lottie-web";
import animation from "./../animations/under-construction.json";
import "../styles/under-construction.scss";
import Expander from "./shared/expander";
import LinkedInImg from "../assets/linkedin.svg";

const UnderConstruction = (): ReactElement => {
  const animationContainer = createRef<HTMLDivElement>();

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    });
  }, []);

  return (
    <div className="d-flex">
      <div className="icon mr-2">
        <div className="animation-container" ref={animationContainer} />
      </div>
      <div className="d-flex flex-column mt-3">
        <div>
          Sorry, this site is still in progress - please check back later for
          updates!
        </div>
        <Expander label="More info" maxWidth={500} maxHeight={300}>
          <p>
            Unfortunately, while this website has been a personal passion
            project of mine, it can still be difficult to find time to work on
            it.
          </p>
          <p>
            I currently work full-time as a developer along with having other
            hobbies and interests to occupy my time. Furthermore, this is my
            first time working with React and I&apos;ve been doing my best to
            teach myself the framework.
          </p>
          <p>
            I&apos;ll try to make updates often, but if you&apos;d like to check
            in on the progress, you can view&nbsp;
            <a
              href="https://github.com/jmacd229/jesse-website"
              rel="noreferrer"
              target="_blank"
            >
              the public GitHub repo
            </a>
            &nbsp;for this site.
          </p>
          <p>
            Finally, if you&apos;d like to find more information on me, or
            contact me, please visit my LinkedIn profile:
          </p>
          <a
            href="https://www.linkedin.com/in/jesse-macdougall-6709b7114"
            rel="noreferrer"
            target="_blank"
            aria-label="link to navigate to Jesse MacDougall's LinkedIn profile"
          >
            <img className="linkedIn" src={LinkedInImg} />
          </a>
        </Expander>
      </div>
    </div>
  );
};

export default UnderConstruction;
