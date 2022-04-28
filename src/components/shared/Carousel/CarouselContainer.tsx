import React, {
  ReactElement,
  useState,
  useRef,
  useEffect,
  createContext,
  DOMAttributes,
} from 'react';
import { debounce, noop } from 'lodash';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';
import { uniqueId } from 'lodash';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import { color, spacing } from 'styles';
import { toPx } from 'utilities/parsing';
import Button from '@shared/Button';

const DEFAULT_ITEM_DIMENSIONS: CarouselItemDimensions = {
  expanded: spacing(6),
  collapsed: spacing(3),
  padding: spacing(1),
};

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${spacing(1)};
`;

const ItemsContainer = styled(animated.div)<{
  $itemDimensions: CarouselItemDimensions;
}>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: ${spacing(1)} 0;
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
    background-image: linear-gradient(
      90deg,
      ${color.GREY},
      transparent 10%,
      transparent 90%,
      ${color.GREY}
    );
  }
`;

const CarouselControl = styled(Button)`
  background-color: transparent;
  padding: 0;
  margin: 0 ${spacing(1)};
  display: flex;
  border-radius: 50%;
  border: none;
  font-size: ${spacing(5)};
`;

export const CarouselContext = createContext({
  carouselId: undefined,
  openItem: -1,
  triggerItemOpen: noop,
  onItemOpen: noop,
  itemDimensions: DEFAULT_ITEM_DIMENSIONS,
});

interface CarouselItemDimensions {
  expanded: string;
  collapsed: string;
  padding: string;
}

export interface CarouselProps extends DOMAttributes<Element> {
  itemDimensions?: CarouselItemDimensions;
  onItemOpen: (id: string) => void;
}

export default function CarouselContainer({
  children,
  itemDimensions = DEFAULT_ITEM_DIMENSIONS,
  onItemOpen,
}: CarouselProps): ReactElement {
  const [openItem, setOpenItem] = useState(-1);
  // Used to calculate if all of the items can fit within their container without buttons
  const [numItemsOnScreen, setNumItemsOnScreen] = useState(0);
  const [itemList, setItemList] = useState(React.Children.toArray(children));
  // Used to generate a unique Id that identifies items within a specific carousel for focussing
  const carouselId = useRef(uniqueId('carousel')).current;
  const containerRef = useRef<HTMLDivElement>();

  const triggerItemOpen = (index: number) => {
    const middleIndex = Math.floor(numItemsOnScreen / 2);
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
    const handleResize = debounce(() => {
      setNumItemsOnScreen(
        Math.floor(
          containerRef?.current?.getBoundingClientRect().width /
            (toPx(itemDimensions.collapsed) + toPx(itemDimensions.padding) * 2)
        )
      );
    }, 300);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // If the screen was resized then we need to re-shift the array so that the item is still in the middle
  useEffect(() => {
    if (openItem > -1) {
      triggerItemOpen(openItem);
    }
  }, [numItemsOnScreen]);

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

  const handleArrowClick = (direction: 'left' | 'right'): void => {
    if (openItem > -1) {
      triggerItemOpen(direction === 'left' ? openItem - 1 : openItem + 1);
    } else {
      // No item currently open, so open middle
      triggerItemOpen(Math.floor(numItemsOnScreen / 2));
    }
  };

  return (
    <CarouselContext.Provider
      value={{
        carouselId,
        openItem,
        triggerItemOpen,
        onItemOpen,
        itemDimensions,
      }}
    >
      <ControlsContainer>
        <CarouselControl onClick={() => handleArrowClick('left')}>
          <ArrowLeft fontSize='inherit' />
        </CarouselControl>
        <ItemsContainer
          role='list'
          onKeyDown={onCarouselKeyPress}
          ref={containerRef}
          $itemDimensions={itemDimensions}
        >
          {transitions((style, item, _, index) => (
            <animated.div style={style}>
              {React.cloneElement(item as ReactElement, {
                index,
              })}
            </animated.div>
          ))}
        </ItemsContainer>
        <CarouselControl onClick={() => handleArrowClick('right')}>
          <ArrowRight fontSize='inherit' />
        </CarouselControl>
      </ControlsContainer>
    </CarouselContext.Provider>
  );
}
