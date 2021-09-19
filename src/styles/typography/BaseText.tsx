import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  ${props => props.css}
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

export default ({ tag = 'p', children, css = null, center, ...rest }) => (
  <StyledText as={tag} css={css} center={center} {...rest}>
    {children}
  </StyledText>
);
