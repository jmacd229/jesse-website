import React, { DOMAttributes, ReactElement, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import { spacing } from 'styles';

export const TOOL_ITEM_SIZE = {
  collapsed: spacing(4),
  expanded: spacing(6),
};

export const TOOL_ITEM_PADDING = spacing(1);

export interface ToolItemProps extends DOMAttributes<Element> {
  tool: Tool;
  open?: boolean;
  focusable?: boolean;
  // src: string;
  // description?: string[];
}

export interface Tool {
  id: string;
  name: string;
  src: string;
  description?: string[];
}

const ImageContainer = styled(animated.div)`
  position: relative;
  padding: ${TOOL_ITEM_PADDING};
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
  focusable = false,
  ...rest
}: ToolItemProps): ReactElement => {
  const [isHovered, setHover] = useState(false);

  const shouldExpand = isHovered || open;

  const animation = useSpring({
    height: shouldExpand ? TOOL_ITEM_SIZE.expanded : TOOL_ITEM_SIZE.collapsed,
    width: shouldExpand ? TOOL_ITEM_SIZE.expanded : TOOL_ITEM_SIZE.collapsed,
    filter: shouldExpand ? 'grayscale(0)' : 'grayscale(0.8)',
  });

  return (
    <ImageContainer
      {...rest}
      role='listitem'
      id={tool.id}
      style={{ ...animation, ...rest.style }}
      tabIndex={focusable ? 0 : -1}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <img src={tool.src} alt={tool.name} />
    </ImageContainer>
  );
};

export default ToolItem;
