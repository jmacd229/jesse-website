import React, { ReactElement, useEffect, useRef, createRef } from 'react';
import lottie from 'lottie-web';
import { uniqueId } from 'lodash';

interface AnimationProps {
  data: unknown;
  loop?: boolean;
  autoplay?: boolean;
}

const Animation = ({
  data,
  loop = true,
  autoplay = true,
  ...rest
}: AnimationProps): ReactElement => {
  const animationContainer = createRef<HTMLDivElement>();
  const name = useRef(uniqueId('animation')).current;

  useEffect(() => {
    lottie.loadAnimation({
      name,
      container: animationContainer.current,
      renderer: 'svg',
      loop,
      autoplay,
      animationData: data,
    });
    return () => lottie.destroy(name);
  }, []);

  return <div ref={animationContainer} {...rest} />;
};

export default Animation;
