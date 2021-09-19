import BaseButton from '@shared/Button/BaseButton';
import ButtonTheme from '@shared/Button/buttonThemes.enum';
import React, { DOMAttributes } from 'react';
import styled from 'styled-components';
import color from 'styles/color';
import link from 'styles/link';

const LinkButton = styled(BaseButton)`
  ${link};
`;

const PrimaryButton = styled(BaseButton)`
  border: 1px solid ${color.blue};
  transition: background-color 100ms ease-in-out;
  &:hover {
	  background-color: ${color.darkBlue};
  }
`;

export interface ButtonProps extends DOMAttributes<Element> {
  theme?: ButtonTheme;
}

export default ({
  theme = ButtonTheme.PRIMARY,
  children,
  ...rest
}: ButtonProps) => {
  switch (theme) {
    case ButtonTheme.LINK:
      return <LinkButton {...rest}>{children}</LinkButton>;
    case ButtonTheme.PRIMARY:
      return <PrimaryButton {...rest}>{children}</PrimaryButton>;
  }
};
