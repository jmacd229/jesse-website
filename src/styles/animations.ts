import { keyframes, css } from 'styled-components';

const gradientKeyFrames = keyframes`
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
background: linear-gradient(90deg, var(--accent-1) 0%, var(--secondary-main) 33%, var(--accent-1) 66%, var(--secondary-main) 100%);
background-size: 400%;
animation: ${gradientKeyFrames} 10s ease infinite;
`;
