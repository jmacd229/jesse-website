import React from 'react';
import styled from 'styled-components';
import spacing from 'styles/spacing';
import BaseText from 'styles/typography/BaseText';

const SmallText = styled(BaseText)`
  font-size: ${props => (props.tiny ? spacing(1.25) : spacing(1.5))};
  margin: ${props => (props.noMargin ? 0 : spacing(1))} 0;
`;

export default ({ children, tiny = false, noMargin=false, ...rest }) => (
  <SmallText {...rest} noMargin={noMargin} tiny={tiny}>{children}</SmallText>
);
