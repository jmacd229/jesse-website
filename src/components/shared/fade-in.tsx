import React, { DOMAttributes } from "react";
import { timer } from "rxjs";
import { finalize, take } from "rxjs/operators";
import "../../styles/shared/fade-in.scss";

export interface FadeInProps extends DOMAttributes<string> {
  whenLoaded?: boolean;
  initialDelay?: number;
  delay?: number;
  reverse?: boolean;
}

export class FadeIn extends React.Component<FadeInProps, { visible: number }> {
  element;
  constructor(props: FadeInProps) {
    super(props);
    this.state = {
      visible: this.props.reverse
        ? React.Children.count(this.props.children)
        : -1,
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
              opacity:
                (i <= this.state.visible && !this.props.reverse) ||
                (i >= this.state.visible && this.props.reverse)
                  ? 1
                  : 0,
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
      this.changeVisibility(!this.props.reverse);
    }
  }

  changeVisibility(makingVisible: boolean): void {
    timer(this.props.initialDelay, this.props.delay)
      .pipe(
        take(React.Children.count(this.props.children)),
        finalize(() => {
          if (!makingVisible) {
            this.setState({
              visible: this.props.reverse
                ? React.Children.count(this.props.children)
                : -1,
            });
          }
        })
      )
      .subscribe(val => {
        const visibility =
          makingVisible && !this.props.reverse
            ? val
            : React.Children.count(this.props.children) - 1 - val;
        this.setState({ visible: visibility });
      });
  }
}
