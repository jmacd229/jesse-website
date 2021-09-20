import { css, keyframes } from 'styled-components';
import color from 'styles/color';

const gradient = keyframes`
    from {
        background-position-x: 0%;
    }
    50% {
        background-position-x: 100%;
    }
    to {
        background-position-x: 0%;
    }
`;

export const animatedGradient = css`
    background: linear-gradient(90deg, ${color.purple} 0%, ${color.blue} 33%, ${color.purple} 66%, ${color.blue} 100%);
    background-size: 400%;
    animation: ${gradient} 10s ease infinite;
`;