import React, { DOMAttributes } from "react";
import { Observable, Subscription, timer } from "rxjs";
import { finalize, take, takeWhile } from "rxjs/operators";
import "../../styles/shared/fade-in.scss";

export interface FadeInProps extends DOMAttributes<string> {
  whenLoaded?: boolean;
  initialDelay?: number;
  delay?: number;
}

export class FadeIn extends React.Component<FadeInProps, { visible: number }> {
  timer: Subscription;
  constructor(props: FadeInProps) {
    super(props);
    this.state = {
      visible: -1,
    };
  }
  render(): React.ReactElement {
    return (
      <div>
        {React.Children.toArray(this.props.children).map((element, i) => (
          <div
            className="fade-in"
            key={i}
            style={{
              opacity: i <= this.state.visible ? 1 : 0,
            }}
          >
            {element}
          </div>
        ))}
      </div>
    );
  }

  componentDidMount(): void {
    if (this.props.whenLoaded) {
      this.changeVisibility(true);
    }
  }

  changeVisibility(makingVisible: boolean): void {
    if (this.timer && !this.timer.closed) {
      this.timer.unsubscribe();
    }
    this.timer = timer(this.props.initialDelay, this.props.delay)
      .pipe(takeWhile(val => val <= React.Children.count(this.props.children)))
      .subscribe(val => {
        const visibility = makingVisible
          ? val
          : React.Children.count(this.props.children) - 1 - val;
        this.setState({ visible: visibility });
      });
  }
}
