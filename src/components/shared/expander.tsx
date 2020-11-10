import React, { createRef, DOMAttributes, RefObject } from "react";

import lottie, { AnimationDirection, AnimationItem } from "lottie-web";
import animation from "../../animations/menu.json";
import "../../styles/shared/expander.scss";
import { FadeIn } from "./fade-in";

export interface ExpanderProps extends DOMAttributes<Element> {
  label: string;
  maxWidth: number;
  maxHeight: number;
  isExpanded(isExpanded: boolean);
}

export class Expander extends React.Component<
  ExpanderProps,
  { isExpanded: boolean }
> {
  animationContainer: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
  fadeInContent: RefObject<FadeIn> = createRef<FadeIn>();
  anim: AnimationItem;

  constructor(props?: ExpanderProps) {
    super(props);
    this.state = { isExpanded: false };
    this.expand = this.expand.bind(this);
  }

  expand(): void {
    this.anim.play();
    this.anim.setDirection(
      (this.anim.playDirection * -1) as AnimationDirection
    );
    this.setState({ isExpanded: this.anim.playDirection === 1 }, () => {
      this.fadeInContent.current.changeVisibility(this.state.isExpanded);
      this.props.isExpanded(this.state.isExpanded);
    });
  }

  componentDidMount(): void {
    this.anim = lottie.loadAnimation({
      container: this.animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animation,
    });
    this.anim.setSpeed(0.75);
    this.anim.play();
  }

  render(): React.ReactElement {
    return (
      <div
        className={"expander" + (this.state.isExpanded ? " expanded" : "")}
        style={{
          height: `${this.state.isExpanded ? this.props.maxHeight : 0}px`,
        }}
      >
        <button
          className="btn p-0 expander-trigger"
          onClick={this.expand}
          style={{
            // subtract 25 for the icon width
            transform: `translateX(${
              this.state.isExpanded ? this.props.maxWidth - 17 : 0
            }px)`,
            marginTop: `${this.state.isExpanded ? 20 : 0}px`,
          }}
        >
          <div className="expander-label">{this.props.label}</div>
          <div className="icon-wrapper flex-shrink-0">
            <div className="icon-small">
              <div
                className="animation-container"
                ref={this.animationContainer}
              />
            </div>
          </div>
        </button>
        <div
          className="expander-panel"
          style={{
            height: `${this.state.isExpanded ? this.props.maxHeight : 0}px`,
          }}
        >
          <div
            className="expander-panel-content"
            style={{
              height: `${this.state.isExpanded ? this.props.maxHeight : 0}px`,
            }}
          >
            <FadeIn forwards={{initialDelay:750, delay:100}} reverse={{delay:50}} ref={this.fadeInContent}>
              {this.props.children}
            </FadeIn>
          </div>
        </div>
      </div>
    );
  }
}
