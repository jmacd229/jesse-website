import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  keyframes,
} from 'styled-components';

const slide = keyframes`
    from {
        background-position: 0 0;
    }
    to {
        background-position: 10rem 10rem;
    }
`;

const slidingBackground = (image: CSSObject): FlattenSimpleInterpolation => css`
  background-image: url(${image});
  background-repeat: repeat;
  animation: ${slide} 10s linear infinite;
`;

export default slidingBackground;
