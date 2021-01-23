import React, { DOMAttributes, ReactElement, useEffect, useState } from 'react';
import { timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import './fade-in.scss';

export interface FadeInProps extends DOMAttributes<string> {
  isVisible?: boolean;
  forwards?: {
    initialDelay?: number;
    delay?: number;
  };
  reverse?: {
    initialDelay?: number;
    delay?: number;
  };
}

export const FadeIn = (props: FadeInProps): ReactElement => {
  const [visible, setVisible] = useState(-1);
  const [fadeTimer, setTimer] = useState(undefined);

  function changeVisibility(makingVisible: boolean): void {
    const direction = makingVisible ? 'forwards' : 'reverse';
    if (fadeTimer && !fadeTimer.closed) {
      fadeTimer.unsubscribe();
    }
    setTimer(
      timer(props[direction].initialDelay, props[direction].delay)
        .pipe(takeWhile(val => val <= React.Children.count(props.children)))
        .subscribe(val => {
          const visibility = makingVisible
            ? val
            : React.Children.count(props.children) - 1 - val;
          setVisible(visibility);
        })
    );
  }

  useEffect(() => {
    changeVisibility(props.isVisible);
  }, [props.isVisible]);

  return (
    <div>
      {React.Children.toArray(props.children).map((element, i) => (
        <div
          className='fade-in'
          key={i}
          style={{
            opacity: i <= visible ? 1 : 0,
          }}>
          {element}
        </div>
      ))}
    </div>
  );
};
