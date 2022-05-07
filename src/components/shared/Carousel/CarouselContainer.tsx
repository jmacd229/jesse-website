import React, {
  ReactElement,
  useState,
  useRef,
  useEffect,
  useMemo,
  DOMAttributes,
} from 'react';
import { debounce, uniqueId } from 'lodash';
import styled, { css } from 'styled-components';
import { useTransition, animated } from 'react-spring';

import { color, spacing } from 'styles';
import { toPx } from 'utilities/parsing';

import {
  CarouselItemDimensions,
  DEFAULT_ITEM_DIMENSIONS,
} from './CarouselItem';
import { CarouselContext } from './Carousel.context';
import { CarouselControl } from './CarouselControl';

const ControlsContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: ${spacing(1)};
`;

const maxSizeGradient = css`
  background-image: linear-gradient(
    90deg,
    ${color.GREY},
    transparent 10%,
    transparent 90%,
    ${color.GREY}
  );
`;

const withButtonsGradient = css`
  background-image: linear-gradient(
    90deg,
    ${color.GREY} 10%,
    transparent 25%,
    transparent 75%,
    ${color.GREY} 90%
  );
`;

const ItemsContainer = styled(animated.div)<{
  $itemDimensions: CarouselItemDimensions;
  $isMaxSize: boolean;
  $isEven: boolean;
}>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${spacing(1)} 0;
  // If there is an even number of items in the carousel, this offsets by 1 so that the selected item always appears in the center
  padding-right: ${({ $isEven, $itemDimensions, $isMaxSize }) =>
    $isEven && !$isMaxSize
      ? `calc(${$itemDimensions.collapsed} + calc(${$itemDimensions.padding} * 2))`
      : 0};
  overflow: hidden;
  // Ensures the height of the box doesn't shrink when there are no selected items
  min-height: calc(
    ${({ $itemDimensions }) => $itemDimensions.expanded} +
      calc(${({ $itemDimensions }) => $itemDimensions.padding} * 2)
  );
  // Creates a gradient effect to hide the edges of the carousel
  &:before {
    pointer-events: none;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    ${({ $isMaxSize }) => ($isMaxSize ? maxSizeGradient : withButtonsGradient)};
  }
`;
export interface CarouselProps extends DOMAttributes<Element> {
  title: string;
  itemDimensions?: CarouselItemDimensions;
  onItemOpen: (id: string) => void;
}

export default function CarouselContainer({
  title,
  children,
  itemDimensions = DEFAULT_ITEM_DIMENSIONS,
  onItemOpen,
}: CarouselProps): ReactElement {
  const [openItem, setOpenItem] = useState(-1);
  const [itemList, setItemList] = useState(React.Children.toArray(children));
  const [isMaxSize, setMaxSize] = useState(false);
  // Used to generate a unique Id that identifies items within a specific carousel for focussing
  const carouselId = useRef(uniqueId('carousel')).current;
  const containerRef = useRef<HTMLDivElement>();
  const allItemsLength = useMemo(
    () =>
      (toPx(itemDimensions.collapsed) + toPx(itemDimensions.padding) * 2) *
      itemList.length,
    [itemList, itemDimensions]
  );

  const triggerItemOpen = (index: number) => {
    const middleIndex = Math.floor(itemList.length / 2);
    // The open item will always be the middle element, therefore this number won't change unless the number of visible elements changes
    setOpenItem(middleIndex);
    // Instead what changes is the array itself, which will place the selected item index at the middle of its elements
    const distanceToMiddle = index - middleIndex;
    if (distanceToMiddle > 0) {
      setItemList(prevValue =>
        prevValue
          .slice(distanceToMiddle)
          .concat(prevValue.slice(0, distanceToMiddle))
      );
    } else if (distanceToMiddle < 0) {
      setItemList(prevValue =>
        prevValue
          .slice(prevValue.length + distanceToMiddle)
          .concat(prevValue.slice(0, prevValue.length + distanceToMiddle))
      );
    }
  };

  useEffect(() => {
    // Lets us know how many items are currently visible minus the items hidden by overflow
    const handleResize = debounce(
      () =>
        setMaxSize(
          containerRef?.current?.getBoundingClientRect().width > allItemsLength
        ),
      300
    );

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (openItem > -1) {
      onItemOpen((itemList[openItem] as ReactElement).props.id);
    }
  }, [openItem, itemList]);

  // Focus needs to be handled manually since want to allow users to navigate with arrow keys, not tab
  const onCarouselKeyPress = event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      const nextIndex = event.key === 'ArrowLeft' ? openItem - 1 : openItem + 1;
      document.getElementById(`${carouselId}-${nextIndex}`).focus();
    }
  };

  const transitions = useTransition(itemList, {
    from: { opacity: 0, transform: `translateY(1rem)` },
    enter: { opacity: 1, transform: `translateY(0rem)` },
    leave: { opacity: 0, transform: `translateY(1rem)` },
    trail: 100,
  });

  return (
    <CarouselContext.Provider
      value={{
        carouselId,
        openItem,
        triggerItemOpen,
        isMaxSize,
        itemDimensions,
      }}
    >
      <ControlsContainer>
        <CarouselControl direction='left' />
        <ItemsContainer
          role='list'
          aria-label={title}
          onKeyDown={onCarouselKeyPress}
          ref={containerRef}
          $itemDimensions={itemDimensions}
          $isMaxSize={isMaxSize}
          $isEven={itemList.length % 2 === 0}
        >
          {transitions((style, item, _, index) => (
            <animated.div style={style} role='presentation'>
              {React.cloneElement(item as ReactElement, {
                index,
              })}
            </animated.div>
          ))}
        </ItemsContainer>
        <CarouselControl direction='right' />
      </ControlsContainer>
    </CarouselContext.Provider>
  );
}
