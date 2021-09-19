import React, { ReactElement } from 'react';
import styled from 'styled-components';
import spacing from 'styles/spacing';
import BaseText, { BaseTextProps } from 'styles/typography/BaseText';

const StyledSmallText = styled(BaseText)`
  font-size: ${props => (props.tiny ? spacing(1.25) : spacing(1.5))};
  margin: ${props => (props.noMargin ? 0 : spacing(1))} 0;
`;

export interface SmallTextProps extends BaseTextProps {
  tiny?: boolean;
  noMargin?: boolean;
}

const SmallText = ({
  children,
  tiny = false,
  noMargin = false,
  ...rest
}: SmallTextProps): ReactElement => (
  <StyledSmallText {...rest} noMargin={noMargin} tiny={tiny}>
    {children}
  </StyledSmallText>
);

export default SmallText;
