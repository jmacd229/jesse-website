import React, { DOMAttributes, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

const BackgroundElement = styled.div.attrs({ 'aria-hidden': true })`
  height: 100%;
  min-width: calc(100vh * 1.46);
  position: fixed;
  top: 0;
  right: 0;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  > * {
    width: 100%;
    height: 100%;
  }
`;

const BackgroundImage = ({
  children,
}: DOMAttributes<Element>): ReactElement => {
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
    <BackgroundElement style={{ opacity: opacity }}>
      {children}
    </BackgroundElement>
  );
};

export default BackgroundImage;
