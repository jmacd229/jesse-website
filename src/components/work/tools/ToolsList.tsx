import React, { ReactElement, useState, useRef, useEffect } from 'react';
import { debounce } from 'lodash';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';
import { uniqueId } from 'lodash';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import ToolItem, {
  TOOL_ITEM_SIZE,
  Tool,
  TOOL_ITEM_PADDING,
} from 'components/work/tools/ToolItem';
import ToolDescriptionPanel from './ToolDescriptionPanel';
import { color, spacing } from 'styles';
import { toPx } from 'utilities/parsing';
import Button from '@shared/Button';

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${spacing(1)};
`;

const ToolsContainer = styled(animated.div)`
  display: flex;
  position: relative;
  width: 100%;
  padding: ${spacing(1)} 0;
  overflow: hidden;
  min-height: calc(${TOOL_ITEM_SIZE.expanded} + calc(${TOOL_ITEM_PADDING} * 2));
  &:before {
    pointer-events: none;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(
      90deg,
      ${color.GREY},
      transparent 10%,
      transparent 90%,
      ${color.GREY}
    );
  }
`;

const CarouselControl = styled(Button)`
  background-color: transparent;
  padding: 0;
  margin: 0 ${spacing(1)};
  display: flex;
  border-radius: 50%;
  border: none;
  font-size: ${spacing(5)};
`;

export const ToolsList = ({ tools }: { tools: Tool[] }): ReactElement => {
  if (!tools?.length) {
    return null;
  }
  const [openTool, setOpenTool] = useState(-1);
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

  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleResize = debounce(() => {
      setNumItemsOnScreen(
        Math.floor(
          containerRef?.current?.getBoundingClientRect().width /
            (toPx(TOOL_ITEM_SIZE.collapsed) + toPx(TOOL_ITEM_PADDING) * 2)
        )
      );
    }, 300);

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (openTool > -1) {
      openItem(openTool);
    }
  }, [numItemsOnScreen]);

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
    trail: 100,
  });

  const handleArrowClick = (direction: 'left' | 'right'): void => {
    if (openTool > -1) {
      openItem(direction === 'left' ? openTool - 1 : openTool + 1);
    } else {
      openItem(Math.floor(numItemsOnScreen / 2));
    }
  };

  return (
    <>
      <ControlsContainer>
        <CarouselControl onClick={() => handleArrowClick('left')}>
          <ArrowLeft fontSize='inherit' />
        </CarouselControl>
        <ToolsContainer
          role='list'
          onKeyDown={onCarouselKeyPress}
          ref={containerRef}
        >
          {transitions((styles, tool, _, i) => (
            <ToolItem
              animation={styles}
              key={uniqueId(tool.id)}
              tool={tool}
              focusable={Math.floor(numItemsOnScreen / 2) === i}
              open={openTool === i}
              onFocus={() => openItem(i)}
            />
          ))}
        </ToolsContainer>
        <CarouselControl onClick={() => handleArrowClick('right')}>
          <ArrowRight fontSize='inherit' />
        </CarouselControl>
      </ControlsContainer>
      <ToolDescriptionPanel
        tool={toolsList[openTool]}
        isOpen={openTool !== null}
      />
    </>
  );
};

export default ToolsList;
