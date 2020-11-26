import React, { useEffect, createRef, ReactElement } from 'react';
import { Position } from '../../../enums/position.enum';

import lottie, { AnimationItem } from 'lottie-web';

export interface AnimatedButtonProps {
  animation: Record<string, unknown>;
  text: string;
  iconPosition: Position;
}

const AnimatedButton = (props: AnimatedButtonProps): ReactElement => {
  const animationContainer = createRef<HTMLDivElement>();
  let anim: AnimationItem;

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: props.animation,
    });
    anim.setDirection(1);
    anim.setSpeed(1);
  }, []);

  function playAnimation() {
    if (anim) {
      anim.play();
      anim.resetSegments(false);
    }
  }

  return (
    <button
      className={'icon-' + props.iconPosition}
      onMouseEnter={playAnimation}
      onFocus={playAnimation}>
      <div className='icon animation-container' ref={animationContainer} />
      <div>{props.text}</div>
    </button>
  );
};

export default AnimatedButton;
