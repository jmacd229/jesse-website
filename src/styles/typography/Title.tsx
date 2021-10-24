import React, { ReactElement } from 'react';
import styled from 'styled-components';
import color from 'styles/color';
import spacing from 'styles/spacing';
import grid from 'assets/grid.svg';
import BaseText, { BaseTextProps } from 'styles/typography/BaseText';
import slidingBackground from 'styles/animations/sliding-background';
import media from 'styles/media';

const TITLE_SIZE_BOUNDS = {
  REGULAR: {
    MIN: spacing(1),
    MAX: spacing(10),
  },
  LARGE: {
    MIN: spacing(2),
    MAX: spacing(20),
  },
};

const getFontSize = (isLarge: boolean) => {
  const size = TITLE_SIZE_BOUNDS[isLarge ? 'LARGE' : 'REGULAR'];
  return `clamp(${size.MIN}, 30vw, ${size.MAX})`;
};

const StyledTitle = styled(BaseText)`
  font-size: ${(props: { large: boolean }) => getFontSize(props.large)};
  line-height: 30vw;
  word-break: keep-all;
  overflow-wrap: normal;
  font-weight: 900;
  background-color: ${color.darkestGrey};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.3rem;
  -webkit-text-stroke-color: ${color.blue};
  ${slidingBackground(grid)}

  ${media.medium} {
    line-height: ${spacing(20)};
  }
`;

export interface TitleProps extends BaseTextProps {
  large?: boolean;
}

const Title = ({
  large = false,
  children,
  ...rest
}: TitleProps): ReactElement => (
  <StyledTitle large={large} tag='h1' {...rest}>
    {children}
  </StyledTitle>
);

export default Title;
