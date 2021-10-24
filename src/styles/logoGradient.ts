import { css } from 'styled-components';
import { animatedGradient } from 'styles/animations/gradient';

export default (image, dimensions) => css`
  content: '';
  display: block;
  background-color: white;
  transition: background-color 1s linear;
  mask: url(${image});
  &::after {
    ${animatedGradient}
    content: '';
    ${dimensions}
    display: block;
    opacity: 0;
    transition: opacity 0.5s linear;
  }
  &:hover,
  &:focus {
    background-color: transparent;
    &::after {
      opacity: 1;
    }
  }
`;
