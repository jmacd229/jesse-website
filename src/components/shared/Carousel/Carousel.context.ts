import { createContext } from 'react';
import { noop } from 'lodash';
import { DEFAULT_ITEM_DIMENSIONS } from './CarouselItem';

export const CarouselContext = createContext({
  carouselId: undefined,
  openItem: -1,
  triggerItemOpen: noop,
  isMaxSize: false,
  itemDimensions: DEFAULT_ITEM_DIMENSIONS,
});
