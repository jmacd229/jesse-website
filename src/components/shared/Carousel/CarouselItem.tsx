import React, {
  DOMAttributes,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import { CarouselContext } from './CarouselContainer';

const ItemContainer = styled(animated.div)<{
  $itemPadding: string;
}>`
  position: relative;
  padding: ${({ $itemPadding }) => $itemPadding};
  border-radius: 50%;
  flex-shrink: 0;
  > * {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export interface CarouselItemProps extends DOMAttributes<Element> {
  id: string;
  index?: number;
}

export const CarouselItem = ({
  children,
  index,
  id,
}: CarouselItemProps): ReactElement => {
  const { carouselId, openItem, triggerItemOpen, onItemOpen, itemDimensions } =
    useContext(CarouselContext);
  const isOpenItem = openItem === index;

  const collapsedItem = {
    height: itemDimensions.collapsed,
    width: itemDimensions.collapsed,
    filter: 'grayscale(0.8)',
  };

  const expandedItem = {
    height: itemDimensions.expanded,
    width: itemDimensions.expanded,
    filter: 'grayscale(0)',
  };

  const [expandStyle, set] = useSpring(
    () => (isOpenItem ? expandedItem : collapsedItem),
    [isOpenItem]
  );

  useEffect(() => {
    if (isOpenItem) {
      onItemOpen(id);
    }
  }, [isOpenItem]);

  return (
    <ItemContainer
      id={`${carouselId}-${index}`}
      $itemPadding={itemDimensions.padding}
      onMouseEnter={() => set(expandedItem)}
      onMouseLeave={() => {
        if (!isOpenItem) set(collapsedItem);
      }}
      onFocus={() => triggerItemOpen(index)}
      role='listitem'
      style={expandStyle}
      tabIndex={isOpenItem ? 0 : -1}
    >
      {children}
    </ItemContainer>
  );
};

export default CarouselItem;
