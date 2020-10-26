import React, {
  useEffect,
  createRef,
  useState,
  ReactElement,
  ReactChildren,
  DOMAttributes,
} from "react";

import lottie, { AnimationDirection } from "lottie-web";
import animation from "../../animations/menu.json";
import "../../styles/shared/expander.scss";

interface ExpanderProps extends DOMAttributes<Element> {
  label: string;
  maxWidth: number;
  maxHeight: number;
}

const Expander = (props: ExpanderProps): ReactElement => {
  const [isExpanded, setExpandedState] = useState(false);
  const animationContainer = createRef<HTMLDivElement>();

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
    <div
      className={"expander" + (isExpanded ? " expanded" : "")}
      style={{
        height: `${isExpanded ? props.maxHeight : 0}px`,
      }}
    >
      <button
        className="btn p-0 expander-trigger"
        style={{
          // subtract 25 for the icon width
          transform: `translateX(${isExpanded ? props.maxWidth - 15 : 0}px)`,
          marginTop: `${isExpanded ? 17 : 0}px`,
        }}
      >
        <div className="expander-label">{props.label}</div>
        <div className="icon-wrapper flex-shrink-0">
          <div className="icon-small">
            <div className="animation-container" ref={animationContainer} />
          </div>
        </div>
      </button>
      <div
        className="expander-panel"
        style={{
          height: `${isExpanded ? props.maxHeight : 0}px`,
        }}
      >
        <div
          className="expander-panel-content"
          style={{
            height: `${isExpanded ? props.maxHeight : 0}px`,
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Expander;
