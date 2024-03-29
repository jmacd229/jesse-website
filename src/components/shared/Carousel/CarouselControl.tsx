import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';

import { spacing, zIndex } from 'styles';
import Button from '@shared/Button';

import { CarouselContext } from './Carousel.context';
import { animated, useTransition } from 'react-spring';

type Direction = 'left' | 'right';

const ArrowButton = styled(Button)`
  background-color: transparent;
  padding: 0;
  margin: 0 -${spacing(1)};
  display: flex;
  border-radius: 50%;
  border: none;
  font-size: ${spacing(5)};
`;

const AnimationContainer = styled(animated.div)<{ $right?: boolean }>`
  position: absolute;
  ${({ $right }) => $right && `right: 0;`}
  z-index: ${zIndex.CAROUSEL_CONTROL};
`;

export const CarouselControl = ({
  direction,
  onBlur,
}: {
  direction: Direction;
  onBlur: () => void;
}): ReactElement => {
  const { openItem, triggerItemOpen, isMaxSize } = useContext(CarouselContext);
  const isRight = direction === 'right';

  const handleArrowClick = (): void => {
    if (openItem > -1) {
      triggerItemOpen(openItem + (isRight ? 1 : -1));
    } else {
      // No item currently open, so open start
      triggerItemOpen(0);
    }
  };

  // Don't display buttons at max size
  const buttonFadeInTransition = useTransition(!isMaxSize, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return buttonFadeInTransition(
    (style, item) =>
      item && (
        <AnimationContainer style={style} $right={isRight}>
          <ArrowButton
            onBlur={onBlur}
            onClick={handleArrowClick}
            aria-label={isRight ? 'Next item' : 'Previous item'}
          >
            {isRight ? (
              <ArrowRight fontSize='inherit' />
            ) : (
              <ArrowLeft fontSize='inherit' />
            )}
          </ArrowButton>
        </AnimationContainer>
      )
  );
};
