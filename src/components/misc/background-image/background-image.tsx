import React, { ReactElement, useEffect, useState } from 'react';


const BackgroundImage = ({children}): any => {
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
<div aria-hidden="true" className='background-image' style={{ opacity: opacity }}>
  {children}
</div>
  );
};

export default BackgroundImage;
