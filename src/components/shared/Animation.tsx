import React, {
  ReactElement,
  useEffect,
  useRef,
  createRef,
  useState,
} from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import { uniqueId } from 'lodash';

interface AnimationProps {
  data: unknown;
  loop?: boolean;
  autoplay?: boolean;
  onHover?: boolean;
}

const Animation = ({
  data,
  loop = true,
  autoplay = true,
  onHover,
  ...rest
}: AnimationProps): ReactElement => {
  const [animation, setAnimation] = useState<AnimationItem>(null);
  const animationContainer = createRef<HTMLDivElement>();
  const name = useRef(uniqueId('animation')).current;

  useEffect(() => {
    const lottieAnimation = lottie.loadAnimation({
      name,
      container: animationContainer.current,
      renderer: 'svg',
      loop,
      autoplay,
      animationData: data,
    });
    setAnimation(lottieAnimation);
    return () => lottieAnimation.destroy(name);
  }, []);

  const events = onHover
    ? {
        onMouseEnter: () => {
          if (animation.isPaused) {
            animation.goToAndPlay(0);
          }
        },
      }
    : {};

  return <div ref={animationContainer} {...events} {...rest} />;
};

export default Animation;
