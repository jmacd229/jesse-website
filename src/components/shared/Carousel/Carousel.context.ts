import { createContext } from 'react';
import { noop } from 'lodash';
import { CarouselItemDimensions } from '@shared/Carousel';
import spacing from 'styles/spacing';

export const DEFAULT_ITEM_DIMENSIONS: CarouselItemDimensions = {
  expanded: spacing(6),
  collapsed: spacing(3),
  padding: spacing(1),
};

export const CarouselContext = createContext({
  carouselId: undefined,
  openItem: -1,
  triggerItemOpen: noop,
  isMaxSize: false,
  itemDimensions: DEFAULT_ITEM_DIMENSIONS,
});
