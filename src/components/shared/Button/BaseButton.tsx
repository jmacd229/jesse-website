import React from 'react';
import styled from 'styled-components';
import color from 'styles/color';

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${color.white};
  cursor: pointer;
  font-size: unset;
`;
export default ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);
