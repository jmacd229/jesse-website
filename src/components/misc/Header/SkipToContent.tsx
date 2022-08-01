import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Button from '@shared/Button';
import { spacing } from 'styles';

const OffScreenButton = styled(Button)`
  position: absolute;
  left: ${spacing(-100)};
  &:focus {
    left: ${spacing(1)};
  }
`;

const handleClick = () => {
  const main = document.getElementsByTagName('main');
  if (main.length) {
    main.item(0).focus();
  }
};

const SkipToContent = (): ReactElement => (
  <OffScreenButton onClick={handleClick}>Skip to main content</OffScreenButton>
);

export default SkipToContent;
