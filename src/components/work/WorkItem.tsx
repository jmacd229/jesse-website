import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { format, isToday } from 'date-fns';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { spacing, color, media } from 'styles';
import { Heading } from 'styles/typography';
import { Tool } from 'components/work/tools/tool_items';
import Carousel from '@shared/Carousel';
import ToolDescriptionPanel from 'components/work/tools/ToolDescriptionPanel';

const ICON_SIZE = '10rem';

export interface WorkItemProps {
  title: string;
  icon: { src: string; round?: boolean; alt: string };
  startDate: Date;
  endDate: Date;
  description: string[];
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
  }
`;

const WorkItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.medium} {
    padding-left: ${spacing(3)};
    // Must be manually calculated due to the way the accordion calculates width
    // spacing(8) is used to account for the spacing(3) on the WorkItemContainer padding, with an additional margin of spacing(2)
    width: calc(100% - calc(${ICON_SIZE} + ${spacing(8)}));
  }
`;

const Icon = styled.img`
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  border-radius: ${(props: { round: boolean }) => (props.round ? '50%' : 0)};
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

const WorkDetails = styled.p`
  &:first-of-type,
  &:last-of-type {
    margin: 0;
  }
`;

const formatDate = (date: Date) => {
  return isToday(date) ? 'Present' : format(date, 'MMM yyyy');
};

export const WorkItem = ({
  title,
  icon,
  startDate,
  endDate,
  description,
  tools,
}: WorkItemProps): ReactElement => {
  const [expanded, setExpanded] = useState(false);
  const [openTool, setOpenTool] = useState(undefined);
  const id = title.replace(/\s+/g, '');
  return (
    <WorkItemContainer role='listitem'>
      <Icon src={icon.src} round={icon.round} alt={icon.alt} />
      <WorkItemInfo>
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
              <Heading level={3}>{title}</Heading>
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
          onItemOpen={id => setOpenTool(tools.find(tool => tool.id === id))}
        >
          {tools?.map(tool => (
            <Carousel.Item key={tool.id} id={tool.id}>
              <img src={tool.src} alt={tool.name} />
            </Carousel.Item>
          ))}
        </Carousel>
        <ToolDescriptionPanel tool={openTool} isOpen={Boolean(openTool)} />
      </WorkItemInfo>
    </WorkItemContainer>
  );
};

export default WorkItem;
