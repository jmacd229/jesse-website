import React from 'react';
import styled from 'styled-components';
import color from 'styles/color';
import spacing from 'styles/spacing';
import grid from 'assets/grid.svg';

const Title = styled.h1`
  font-size: clamp(${spacing(2)}, 30vw, ${spacing(20)});
  word-break: keep-all;
  overflow-wrap: normal;
  font-weight: 900;
  background-color: ${color.darkestGrey};
  background-image: url(${grid});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.3rem;
  -webkit-text-stroke-color: ${color.blue};
  background-repeat: repeat;
  animation: animatedBackground 10s linear infinite;
  ${props => props.css}
`;

export default ({ children, css = null, ...rest }) => (
  <Title css={css} {...rest}>
    {children}
  </Title>
);
