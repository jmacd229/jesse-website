import { FC } from 'react';
import CarouselContainer, { CarouselProps } from './CarouselContainer';
import CarouselItem, { CarouselItemProps } from './CarouselItem';

interface CarouselComposition extends FC<CarouselProps> {
  Item: FC<CarouselItemProps>;
}

const Carousel = CarouselContainer as CarouselComposition;
Carousel.Item = CarouselItem;

export { CarouselItemDimensions } from './CarouselItem';

export default Carousel;
