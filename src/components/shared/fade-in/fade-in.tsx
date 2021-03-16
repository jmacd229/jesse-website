import { TimeDuration } from '../../model/time-duration';
import { TimeUnit } from 'enums/time-unit';
import React, { DOMAttributes, ReactElement, useEffect, useState } from 'react';
import { timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import styled from 'styled-components';

export interface FadeInProps extends DOMAttributes<string> {
  isVisible?: boolean;
  animationDuration?: TimeDuration;
  forwards?: FadeInDelay;
  reverse?: FadeInDelay;
}

interface FadeInDelay {
  initialDelay?: number;
  delay?: number;
}

export enum FadeDirection {
  FORWARDS = 'forwards',
  REVERSE = 'reverse',
}

// Animation duration can be customized, default is 0.5s
const FadeInUnit = styled.div(
  (props: { opacity: number; animationDuration: TimeDuration }) => `
  opacity: ${props.opacity};
  transition: opacity ${(
    props.animationDuration || new TimeDuration(0.5, TimeUnit.SECONDS)
  ).getValue()} linear;
`
);

export const FadeIn = (props: FadeInProps): ReactElement => {
  // An integer that keeps track of what elements are currently hidden and which are visible
  // All elements less than the visibleIndex are visible, and all above the visibleIndex are hidden
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [fadeTimer, setTimer] = useState(undefined);

  useEffect(() => {
    const direction = props.isVisible
      ? FadeDirection.FORWARDS
      : FadeDirection.REVERSE;

    // If the visibility is changed before the timer has run out (interruption in the middle of fade-in/out)
    // unsubscribe because a new subscription will be created instead.
    if (fadeTimer && !fadeTimer.closed) {
      fadeTimer.unsubscribe();
    }
    setTimer(
      timer(props[direction].initialDelay, props[direction].delay)
        .pipe(
          takeWhile(
            currentTime => currentTime <= React.Children.count(props.children)
          )
        )
        .subscribe(currentTime => {
          // If showing elements, the visibleIndex is incremented up until the number of children provided
          // If hiding elements, the visibleIndex is decremented to -1
          const visibility = props.isVisible
            ? currentTime
            : React.Children.count(props.children) - 1 - currentTime;
          setVisibleIndex(visibility);
        })
    );
    return () => {
      if (fadeTimer && !fadeTimer.closed) {
        fadeTimer.unsubscribe();
      }
    };
    // take if statement from line 49
  }, [props.isVisible]);

  return (
    <div>
      {React.Children.toArray(props.children).map((element, i) => (
        <FadeInUnit key={i} opacity={i <= visibleIndex ? 1 : 0}>
          {element}
        </FadeInUnit>
      ))}
    </div>
  );
};
