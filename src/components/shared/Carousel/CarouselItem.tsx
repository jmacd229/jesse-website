import React, { DOMAttributes, ReactElement, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import { CarouselContext } from './Carousel.context';

export interface CarouselItemDimensions {
  expanded: string;
  collapsed: string;
  padding: string;
}

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
  ...rest
}: CarouselItemProps): ReactElement => {
  const { carouselId, openItem, triggerItemOpen, itemDimensions } =
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

  return (
    <ItemContainer
      $itemPadding={itemDimensions.padding}
      onMouseEnter={() => set(expandedItem)}
      onMouseLeave={() => {
        if (!isOpenItem) set(collapsedItem);
      }}
      onFocus={() => triggerItemOpen(index)}
      style={expandStyle}
      role='listitem'
      // Only the open item is focusable. If no item is currently open, then make the first item in the list focusable
      // this allows keyboard-only users to still have access to open an item
      tabIndex={isOpenItem || (openItem === -1 && index === 0) ? 0 : -1}
      {...rest}
      id={`${carouselId}-${index}`}
      aria-describedby={isOpenItem ? rest['aria-describedby'] : null}
    >
      {children}
    </ItemContainer>
  );
};

export default CarouselItem;
