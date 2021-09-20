import React, { ReactElement } from 'react';
import styled from 'styled-components';
import color from 'styles/color';
import spacing from 'styles/spacing';
import grid from 'assets/grid.svg';
import BaseText, { BaseTextProps } from 'styles/typography/BaseText';

const StyledTitle = styled(BaseText)`
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
`;

const Title = ({ children, ...rest }: BaseTextProps): ReactElement => (
  <StyledTitle tag='h1' {...rest}>
    {children}
  </StyledTitle>
);

export default Title;
