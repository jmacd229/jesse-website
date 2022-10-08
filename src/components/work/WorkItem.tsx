import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { format, isToday } from 'date-fns';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { spacing, color, media } from 'styles';
import { Heading } from 'styles/typography';
import { Tool } from 'components/work/tools/tool_items';
import Carousel, { CarouselItemDimensions } from '@shared/Carousel';
import ToolPanel, { getPanelId } from 'components/work/tools/ToolPanel';

const DESKTOP_ICON_SIZE = '6rem';
const MOBILE_ICON_SIZE = '10rem';
const TOOL_ICON_DIMENSIONS: CarouselItemDimensions = {
  expanded: spacing(6),
  collapsed: spacing(3),
  padding: spacing(1),
};

export interface WorkItemProps {
  id: string;
  title: string;
  icon: { src: string; round?: boolean; alt: string };
  startDate: Date;
  endDate: Date;
  description?: string[];
  tools?: Tool[];
}

const WorkItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing(4)};
  width: 100%;
  padding: ${spacing(3)};
  ${media.medium} {
    flex-direction: row;
    align-items: flex-start;
    gap: 0;
    max-width: 70rem;
  }
`;

const WorkItemInfo = styled.div<{ $toolsLength: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.medium} {
    padding-left: ${spacing(3)};
    // Must be manually calculated due to the way the accordion calculates width
    // spacing(8) is used to account for the spacing(3) on the WorkItemContainer padding, with an additional margin of spacing(2)
    max-width: calc(100% - calc(${DESKTOP_ICON_SIZE} + ${spacing(8)}));
    width: calc(
      calc(
          ${TOOL_ICON_DIMENSIONS.collapsed} *
            ${({ $toolsLength }) => $toolsLength}
        ) +
        calc(
          ${TOOL_ICON_DIMENSIONS.padding} *
            ${({ $toolsLength }) => $toolsLength * 2}
        ) + ${TOOL_ICON_DIMENSIONS.expanded}
    );
  }
`;

const Icon = styled.img`
  width: ${MOBILE_ICON_SIZE};
  border-radius: ${(props: { round: boolean }) => (props.round ? '50%' : 0)};
  ${media.medium} {
    width: ${DESKTOP_ICON_SIZE};
  }
`;

const WorkDate = styled.div`
  color: ${color.WHITE};
  font-weight: 700;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NoDescriptionSummaryContainer = styled(SummaryContainer)`
  height: 100%;
  justify-content: center;
  padding-left: ${spacing(3)};
`;

const WorkDetails = styled.p`
  &:first-of-type,
  &:last-of-type {
    margin: 0;
  }
`;

const ToolPanelContainer = styled.div`
  position: relative;
`;
const ToolPanelAbsolutePositioning = styled.div`
  position: absolute;
  width: 100%;
`;

const formatDate = (date: Date) => {
  return isToday(date) ? 'Present' : format(date, 'MMM yyyy');
};

export const WorkItem = ({
  id,
  title,
  icon,
  startDate,
  endDate,
  description,
  tools,
}: WorkItemProps): ReactElement => {
  const [expanded, setExpanded] = useState(false);
  const [openTool, setOpenTool] = useState(undefined);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  return (
    <WorkItemContainer
      role='listitem'
      aria-labelledby={description && `workItem-heading-${id}`}
    >
      <Icon src={icon.src} round={icon.round} alt={icon.alt} />
      {description ? (
        <WorkItemInfo $toolsLength={Number(tools?.length)}>
          <Accordion
            expanded={expanded}
            onChange={(_, isExpanded) => setExpanded(isExpanded)}
            elevation={0}
            TransitionProps={{ timeout: 2000 }}
          >
            <AccordionSummary
              sx={{ width: '100%' }}
              expandIcon={<ExpandMoreIcon fontSize='large' />}
              aria-controls={`workItem-${id}-content`}
              id={`workItem-${id}`}
            >
              <SummaryContainer>
                <Heading level={3} id={`workItem-heading-${id}`}>
                  {title}
                </Heading>
                <WorkDate>
                  {formatDate(startDate)} - {formatDate(endDate)}
                </WorkDate>
              </SummaryContainer>
            </AccordionSummary>
            <AccordionDetails>
              {description.map((item, i) => (
                <WorkDetails key={i}>{item}</WorkDetails>
              ))}
            </AccordionDetails>
          </Accordion>
          <Carousel
            title={title}
            onItemOpen={id => {
              setOpenTool(tools.find(tool => tool.id === id));
              setIsPanelOpen(true);
            }}
            onCarouselBlur={() => setIsPanelOpen(false)}
            onItemFocus={() => setIsPanelOpen(true)}
          >
            {tools?.map(tool =>
              tool ? (
                <Carousel.Item
                  key={tool.id}
                  id={tool.id}
                  aria-label={tool.name}
                  aria-describedby={isPanelOpen ? getPanelId(id) : null}
                >
                  <img src={tool.src} aria-hidden />
                </Carousel.Item>
              ) : null
            )}
          </Carousel>
          <ToolPanelContainer>
            <ToolPanelAbsolutePositioning>
              <ToolPanel tool={openTool} isOpen={isPanelOpen} />
            </ToolPanelAbsolutePositioning>
          </ToolPanelContainer>
        </WorkItemInfo>
      ) : (
        <NoDescriptionSummaryContainer>
          <Heading level={3}>{title}</Heading>
          <WorkDate>
            {formatDate(startDate)} - {formatDate(endDate)}
          </WorkDate>
        </NoDescriptionSummaryContainer>
      )}
    </WorkItemContainer>
  );
};

export default WorkItem;
