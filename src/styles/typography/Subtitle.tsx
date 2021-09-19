import React from 'react';
import styled from 'styled-components';
import spacing from 'styles/spacing';
import BaseText from 'styles/typography/BaseText';

const Subtitle = styled(BaseText)`
  font-size: ${spacing(4)};
  font-weight: 500;

  ${props => props.css}
`;

export default ({ children, css = null, ...rest }) => (
  <Subtitle tag="h2" css={css} {...rest}>
    {children}
  </Subtitle>
);
