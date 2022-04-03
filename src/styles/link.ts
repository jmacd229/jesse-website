import { css } from 'styled-components';
import Color from 'styles/color';

export default css`
  color: ${Color.LIGHT_BLUE};
  text-decoration: underline;
  transition: color 0.25s linear;
  &:hover,
  &:focus {
    color: ${Color.LIGHT_PURPLE};
  }
`;
