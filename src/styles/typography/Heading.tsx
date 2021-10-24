import React from 'react';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { color, spacing } from 'styles';
import BaseText, { BaseTextProps } from 'styles/typography/BaseText';
import { warn } from 'utilities/logging';

const StyledSubtitle = styled(BaseText)`
  font-size: ${({ tag }) => {
    switch (tag) {
      case 'h3':
        return spacing(2.5);
      case 'h4':
      case 'h5':
      case 'h6':
        return spacing(2);
    }
  }};
  color: ${color.white};
  font-weight: 500;
`;

export interface HeadingProps extends BaseTextProps {
  level: number;
}

const getTag = level => {
  if (level < 7 && level > 2) {
    return `h${level}` as React.ElementType;
  }
  warn(
    'The Heading element is meant for level 3 to 6, please use a SmallText, Subtitle or Title element instead.'
  );
  return 'h3';
};

const Heading = ({ level, children, ...rest }: HeadingProps): ReactElement => {
  return (
    <StyledSubtitle tag={getTag(level)} {...rest}>
      {children}
    </StyledSubtitle>
  );
};

export default Heading;
