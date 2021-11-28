import React, { ReactElement, useState, useRef, useEffect } from 'react';
import { uniqueId } from 'lodash';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import ToolItem, {
  TOOL_ITEM_SIZE,
  Tool,
  TOOL_ITEM_PADDING,
} from 'components/work/tools/ToolItem';
import { spacing } from 'styles';
import { toPx } from 'utilities/parsing';
import Button from '@shared/Button';

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToolsContainer = styled(animated.div)`
  display: flex;
  position: relative;
  width: 100%;
  padding: ${spacing(2)} 0;
  overflow: hidden;
  min-height: calc(${TOOL_ITEM_SIZE.expanded} + calc(${TOOL_ITEM_PADDING} * 2));
`;

const CarouselControl = styled(Button)`
  background-color: transparent;
  border: none;
`;

export const ToolsList = ({ tools }: { tools: Tool[] }): ReactElement => {
  if (!tools?.length) {
    return null;
  }
  const [openTool, setOpenTool] = useState(null);
  // Used to calculate if all of the tools can fit within their container without buttons
  const [numItemsOnScreen, setNumItemsOnScreen] = useState(0);
  const [toolsList, setToolsList] = useState(tools);

  const openItem = (index: number) => {
    const distanceToMiddle = index - Math.floor(numItemsOnScreen / 2);
    if (distanceToMiddle === 0) {
      setOpenTool(index);
      return;
    }
    if (distanceToMiddle > 0) {
      setToolsList(prevValue =>
        prevValue
          .slice(distanceToMiddle)
          .concat(prevValue.slice(0, distanceToMiddle))
      );
    } else if (distanceToMiddle < 0) {
      setToolsList(prevValue =>
        prevValue
          .slice(prevValue.length + distanceToMiddle)
          .concat(prevValue.slice(0, prevValue.length + distanceToMiddle))
      );
    }
    setOpenTool(index - distanceToMiddle);
  };
  const closeItem = () => setOpenTool(null);
  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleResize = () => {
      setNumItemsOnScreen(
        Math.floor(
          containerRef?.current?.getBoundingClientRect().width /
            (toPx(TOOL_ITEM_SIZE.collapsed) + toPx(TOOL_ITEM_PADDING) * 2)
        )
      );
    };

    //DEBOUNCE THIS
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onCarouselKeyPress = event => {
    if (event.key === 'ArrowLeft') {
      document.getElementById(toolsList[openTool - 1].id).focus();
    }
    if (event.key === 'ArrowRight') {
      document.getElementById(toolsList[openTool + 1].id).focus();
    }
  };

  const transitions = useTransition(toolsList, {
    from: { opacity: 0, transform: `translateY(1rem)` },
    enter: { opacity: 1, transform: `translateY(0rem)` },
    leave: { opacity: 0, transform: `translateY(1rem)` },
    delay: 1000,
  });

  return (
    <ControlsContainer>
      <CarouselControl>Left</CarouselControl>
      <ToolsContainer
        role='list'
        onKeyDown={onCarouselKeyPress}
        ref={containerRef}>
        {transitions((styles, tool, _, i) => (
          <ToolItem
            style={styles}
            key={uniqueId(tool.id)}
            tool={tool}
            focusable={Math.floor(numItemsOnScreen / 2) === i}
            open={openTool === i}
            onFocus={() => openItem(i)}
            onBlur={closeItem}
          />
        ))}
      </ToolsContainer>
      <CarouselControl onClick={() => toolsList.pop()}>Right</CarouselControl>
    </ControlsContainer>
  );
};

export default ToolsList;
