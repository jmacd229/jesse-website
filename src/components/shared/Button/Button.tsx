import BaseButton, { BaseButtonProps } from '@shared/Button/BaseButton';
import ButtonTheme from './buttonThemes.enum';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import color from 'styles/color';
import link from 'styles/link';

const LinkButton = styled(BaseButton)`
  ${link};
  border: none;
`;

const PrimaryButton = styled(BaseButton)`
  border: 1px solid ${color.blue};
  background-color: ${color.darkestGrey};
  transition: background-color 100ms ease-in-out;
  &:hover {
    background-color: ${color.darkBlue};
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
