import React, { useEffect, createRef, useState } from "react";

import lottie, { AnimationDirection } from "lottie-web";
import animation from "../../animations/menu.json";
import "../../styles/shared/expander.scss";

interface ExpanderProps {
  label: string;
  maxWidth: number;
}

const Expander = (props: ExpanderProps) => {
  const [isExpanded, setExpandedState] = useState(false);
  let animationContainer = createRef<HTMLDivElement>();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animation,
    });
    anim.setSpeed(0.75);
    function expand() {
      anim.play();
      anim.setDirection((anim.playDirection * -1) as AnimationDirection);
      setExpandedState(anim.playDirection === 1);
    }
    animationContainer.current.parentElement.parentElement.addEventListener(
      "click",
      expand
    );
    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div className={"expander" + (isExpanded ? " expanded" : "")} style={{
      width: `${props.maxWidth + 50}px`
    }}>
      <button
        className="btn p-0 expander-trigger"
        style={{
          transform: `translateX(${isExpanded ? props.maxWidth : 0}px)`,
        }}
      >
        <div className="expander-label">{props.label}</div>
        <div className="icon-wrapper">
          <div className="icon flex-shrink-0">
            <div className="animation-container" ref={animationContainer} />
          </div>
        </div>
      </button>
      <div className="expander-panel"></div>
    </div>
  );
};

export default Expander;
