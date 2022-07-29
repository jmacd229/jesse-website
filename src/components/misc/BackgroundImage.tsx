import React, { DOMAttributes, ReactElement, useEffect, useState } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';
import { color } from 'styles';
import createLinearGradient from 'styles/createLinearGradient';

const BackgroundElement = styled.div.attrs({ 'aria-hidden': true })<{
  $gradient: SimpleInterpolation;
}>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  mask-image: ${props => props.$gradient};
  > * {
    width: 100%;
    height: 100%;
  }
`;

export interface BackgroundImageProps extends DOMAttributes<Element> {
  gradient?: SimpleInterpolation;
}

const BackgroundImage = ({
  children,
  gradient = createLinearGradient(270, color.GREY, color.TRANSPARENT),
}: BackgroundImageProps): ReactElement => {
  const MAX_OPACITY_WIDTH = 1200;
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function handleWindowResize() {
      setOpacity(
        window.innerWidth >= MAX_OPACITY_WIDTH
          ? 1
          : window.innerWidth / MAX_OPACITY_WIDTH
      );
    }
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return (
    <BackgroundElement style={{ opacity: opacity }} $gradient={gradient}>
      {children}
    </BackgroundElement>
  );
};

export default BackgroundImage;
