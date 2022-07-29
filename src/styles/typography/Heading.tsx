import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { color, spacing } from 'styles';
import BaseText, { BaseTextProps } from 'styles/typography/BaseText';
import { warn } from 'utilities/logging';

const FONT = {
  SIZE: {
    h3: spacing(2.5),
    default: spacing(2),
  },
  WEIGHT: {
    h4: 700,
    default: 300,
  },
  STYLE: {
    h4: 'italic',
    default: 'normal',
  },
};

const getFontAttribute = (
  key: keyof typeof FONT,
  tag: React.ElementType
): any => FONT[key][tag.toString()] ?? FONT[key].default;

const StyledSubtitle = styled(BaseText)`
  color: ${color.WHITE};
  font-size: ${({ tag }) => getFontAttribute('SIZE', tag)};
  font-weight: ${({ tag }) => getFontAttribute('WEIGHT', tag)};
  font-style: ${({ tag }) => getFontAttribute('STYLE', tag)};
`;

export interface HeadingProps extends BaseTextProps {
  level: number;
}

const getTag = (level: number): React.ElementType => {
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
