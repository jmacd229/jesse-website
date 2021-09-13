import React from 'react';
import styled from 'styled-components';
import spacing from 'styles/spacing';

const Subtitle = styled.h2`
  font-size: ${spacing(4)};
  font-weight: 500;

  ${props => props.css}
`;

export default ({ children, css = null, ...rest }) => (
  <Subtitle css={css} {...rest}>
    {children}
  </Subtitle>
);
