import React from 'react';
import { ReactElement } from 'react';
import styled from 'styled-components';
import spacing from 'styles/spacing';
import BaseText, { BaseTextProps } from 'styles/typography/BaseText';

const StyledSubtitle = styled(BaseText)`
  font-size: ${spacing(4)};
  font-weight: 500;
`;

const Subtitle = ({ children, ...rest }: BaseTextProps): ReactElement => (
  <StyledSubtitle tag='h2' {...rest}>
    {children}
  </StyledSubtitle>
);

export default Subtitle;
