import React, { DOMAttributes, ReactElement } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import { spacing } from 'styles';

export interface ToolItemProps extends DOMAttributes<Element> {
  tool: Tool;
  open?: boolean;
  src: string;
  description?: string[];
}

export interface Tool {
  id: string;
  name: string;
  src: string;
  description?: string[];
}

const ImageContainer = styled(animated.div)`
  padding: ${spacing(1)};
  border-radius: 50%;
  flex-shrink: 0;
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export const ToolItem = ({
  tool,
  open = false,
  ...rest
}: ToolItemProps): ReactElement => {
  const animation = useSpring({
    height: open ? '6rem' : '4rem',
    width: open ? '6rem' : '4rem',
    filter: open ? 'grayscale(0)' : 'grayscale(0.8)',
  });

  return (
    <ImageContainer style={animation} tabIndex='0' {...rest}>
      <img src={tool.src} alt={tool.name} />
    </ImageContainer>
  );
};

export default ToolItem;
