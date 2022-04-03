import { Direction } from 'model/enums/direction.enum';
import { css, keyframes, SimpleInterpolation } from 'styled-components';
import Color from 'styles/color';

const getGradientKeyframes = (direction: Direction) => {
  const axis = direction === Direction.HORIZONTAL ? 'x' : 'y';
  return keyframes`
    from {
        background-position-${axis}: 0%;
    }
    50% {
        background-position-${axis}: 100%;
    }
    to {
        background-position-${axis}: 0%;
    }
`;
};

export const createAnimatedGradient = (
  direction: Direction = Direction.HORIZONTAL
): SimpleInterpolation => css`
  background-image: linear-gradient(
    ${direction === Direction.HORIZONTAL ? 90 : 0}deg,
    ${Color.PURPLE} 0%,
    ${Color.BLUE} 33%,
    ${Color.PURPLE} 66%,
    ${Color.BLUE} 100%
  );
  background-size: 400% 400%;
  animation: ${getGradientKeyframes(direction)} 10s ease infinite;
`;
