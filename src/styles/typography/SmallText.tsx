import React from 'react';
import styled from 'styled-components';
import spacing from 'styles/spacing';

const SmallText = styled.p`
  font-size: ${spacing(1.5)};
  margin: ${props => props.noMargin ? 0 : spacing(1)} 0;

  ${props => props.css}

  
`;

export default ({ children, css = null, ...rest }) => (
  <SmallText css={css} {...rest}>
    {children}
  </SmallText>
);
