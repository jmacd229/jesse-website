import { css } from 'styled-components';
import color from 'styles/color';

export default css`
    color: ${color.lightBlue};
    text-decoration: underline;
    transition: color 0.25s linear;
    &:hover,
    &:focus {
        color: ${color.lightPurple};
    }
`;