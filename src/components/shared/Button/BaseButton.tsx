import React, { DOMAttributes, ReactElement } from 'react';
import styled from 'styled-components';
import color from 'styles/color';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Page } from 'enums/pages.enum';
import spacing from 'styles/spacing';

const StyledButton = styled.button`
  background-color: transparent;
  color: ${color.white};
  cursor: pointer;
  font-size: unset;
  padding: ${spacing(0.5)} ${spacing(1)};
`;

const StyledLink = styled(AniLink)`
  color: ${color.white};
  padding: ${spacing(0.5)} ${spacing(1)};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${color.white};
  }
`;

export interface BaseButtonProps extends DOMAttributes<Element> {
  to?: Page;
}

const BaseButton = ({
  children,
  to = null,
  ...rest
}: BaseButtonProps): ReactElement => {
  if (to) {
    return (
      <StyledLink swipe direction='left' to={to} {...rest}>
        {children}
      </StyledLink>
    );
  } else {
    return <StyledButton {...rest}>{children}</StyledButton>;
  }
};

export default BaseButton;
