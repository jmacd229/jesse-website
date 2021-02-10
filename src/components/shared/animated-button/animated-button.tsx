import React, { useEffect, createRef, ReactElement, useState } from 'react';
import { Position } from 'enums/position.enum';
import './animated-button.scss';
import lottie from 'lottie-web';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export interface AnimatedButtonProps {
  id?: string;
  animation: Record<string, unknown>;
  text: string;
  iconPosition: Position;
  link?: string;
  textOnHover?: boolean;
  getProps?: Function;
}

const AnimatedButton = (props: AnimatedButtonProps): ReactElement => {
  const [animation, setAnimation] = useState({
    item: null,
    container: createRef<HTMLDivElement>(),
  });

  useEffect(() => {
    const item = lottie.loadAnimation({
      container: animation.container.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: props.animation,
    });
    item.setSpeed(1);
    item.setDirection(1);
    setAnimation({ ...animation, item });
  }, []);

  function playAnimation() {
    if (animation) {
      animation.item.play();
      animation.item.resetSegments(false);
    }
  }

  return (
    <AniLink
      id={props.id}
      paintDrip
      hex='#00BCBD'
      to={props.link}
      className={'btn anim-button ' + props.iconPosition}
      onMouseEnter={playAnimation}
      onFocus={playAnimation}
      getProps={props.getProps}>
      <div
        className='icon animation-container flex-shrink-0'
        ref={animation.container}
      />
      <div className={props.textOnHover ? 'hover-text' : null}>
        {props.text}
      </div>
    </AniLink>
  );
};

export default AnimatedButton;
