import BaseButton, { BaseButtonProps } from '@shared/Button/BaseButton';
import ButtonTheme from './buttonThemes.enum';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Color from 'styles/color';
import link from 'styles/link';

const LinkButton = styled(BaseButton)`
  ${link};
  border: none;
`;

const PrimaryButton = styled(BaseButton)`
  border: 1px solid ${Color.BLUE};
  background-color: ${Color.DARKEST_GREY};
  transition: background-color 100ms ease-in-out;
  &:hover {
    background-color: ${Color.DARKEST_BLUE};
  }
`;

export interface ButtonProps extends BaseButtonProps {
  theme?: ButtonTheme;
}

const Button = ({
  theme = ButtonTheme.PRIMARY,
  children,
  ...rest
}: ButtonProps): ReactElement => {
  switch (theme) {
    case ButtonTheme.LINK:
      return <LinkButton {...rest}>{children}</LinkButton>;
    case ButtonTheme.PRIMARY:
      return <PrimaryButton {...rest}>{children}</PrimaryButton>;
  }
};

export default Button;
