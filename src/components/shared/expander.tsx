import React, { useEffect, createRef, useState } from "react";

import lottie, { AnimationDirection } from "lottie-web";
import animation from "../../animations/menu.json";
import "../../styles/shared/expander.scss";

interface ExpanderProps {
  label: string;
  maxWidth: number;
  maxHeight: number;
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
    animationContainer.current.parentElement.parentElement.parentElement.addEventListener(
      "click",
      expand
    );
    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div className={"expander" + (isExpanded ? " expanded" : "")} style={{
      height: `${isExpanded ? props.maxHeight : 0}px`
    }}>
      <button
        className="btn p-0 expander-trigger"
        style={{
          // subtract 25 for the icon width
          transform: `translate(${isExpanded ? props.maxWidth - 25 : 0}px,${isExpanded ? 21 : 0}px)`,
        }}
      >
        <div className="expander-label">{props.label}</div>
        <div className="icon-wrapper flex-shrink-0">
          <div className="icon-small">
            <div className="animation-container" ref={animationContainer} />
          </div>
        </div>
      </button>
      <div className="expander-panel" style={{
      height: `${isExpanded ? props.maxHeight : 0}px`
    }}></div>
    </div>
  );
};

export default Expander;
