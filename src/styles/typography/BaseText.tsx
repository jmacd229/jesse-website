import React, { DOMAttributes, ReactElement } from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  text-align: ${(props: { center: boolean }) =>
    props.center ? 'center' : 'left'};
`;

export interface BaseTextProps extends DOMAttributes<Element> {
  tag?: React.ElementType;
  center?: boolean;
}

const BaseText = ({
  tag = 'p',
  children,
  center = false,
  ...rest
}: BaseTextProps): ReactElement => (
  <StyledText as={tag} center={center} {...rest}>
    {children}
  </StyledText>
);

export default BaseText;
