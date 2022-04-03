import { css, SimpleInterpolation } from 'styled-components';
import { createAnimatedGradient } from 'styles/animations/gradient';
import { Position, isPositionOnVerticalPlane } from 'model/enums/position.enum';
import { Direction } from 'model/enums/direction.enum';
import Thickness from 'styles/thickness';

const getGradientPosition = (position: Position): SimpleInterpolation => {
  switch (position) {
    case Position.BELOW:
      return css`
        bottom: 0;
        left: 0;
      `;
    case Position.RIGHT:
      return css`
        top: 0;
        right: 0;
      `;
    default:
      return css`
        top: 0;
        left: 0;
      `;
  }
};

const createLineGradient = (
  position: Position,
  thickness: Thickness = Thickness.REGULAR
) => css`
  &:before {
    content: '';
    opacity: 0.5;
    position: absolute;
    ${getGradientPosition(position)}
    ${createAnimatedGradient(
      isPositionOnVerticalPlane(position)
        ? Direction.HORIZONTAL
        : Direction.VERTICAL
    )}
    width: ${isPositionOnVerticalPlane(position) ? '100%' : thickness};
    height: ${isPositionOnVerticalPlane(position) ? thickness : '100%'};
  }
`;

export default createLineGradient;
