import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';

import { spacing } from 'styles';
import Button from '@shared/Button';

import { CarouselContext } from './Carousel.context';

type Direction = 'left' | 'right';

const ArrowButton = styled(Button)<{ $right?: boolean }>`
  position: absolute;
  ${({ $right }) => $right && `right: 0;`}
  z-index: 2;
  background-color: transparent;
  padding: 0;
  margin: 0 ${spacing(1)};
  display: flex;
  border-radius: 50%;
  border: none;
  font-size: ${spacing(5)};
`;

export const CarouselControl = ({
  direction,
}: {
  direction: Direction;
}): ReactElement => {
  const { openItem, triggerItemOpen, isMaxSize } = useContext(CarouselContext);
  const isRight = direction === 'right';
  // Don't display buttons at max size
  if (isMaxSize) {
    return;
  }

  const handleArrowClick = (): void => {
    if (openItem > -1) {
      triggerItemOpen(openItem + (isRight ? 1 : -1));
    } else {
      // No item currently open, so open start
      triggerItemOpen(0);
    }
  };

  return (
    <ArrowButton
      onClick={handleArrowClick}
      $right={isRight}
      aria-label={isRight ? 'Next item' : 'Previous item'}
    >
      {isRight ? (
        <ArrowRight fontSize='inherit' />
      ) : (
        <ArrowLeft fontSize='inherit' />
      )}
    </ArrowButton>
  );
};
