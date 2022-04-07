import React, { ReactElement } from 'react';
import Panel, { PanelProps } from '@shared/Panel';
import styled from 'styled-components';
import spacing from 'styles/spacing';
import { Tool } from 'components/work/tools/ToolItem';
import { Heading } from 'styles/typography';
import { color } from 'styles';

export interface ToolDescriptionPanelProps extends PanelProps {
  tool?: Tool;
}

const PanelList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: ${spacing(0.5)} 0;
  padding-left: ${spacing(1)};
  gap: ${spacing(2)};
`;

const PanelListItem = styled.li`
  padding-left: ${spacing(1)};
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: ${spacing(-0.5)};
    top: ${spacing(1)};
    width: ${spacing(0.5)};
    height: ${spacing(0.5)};
    background-color: ${color.BLUE};
    border-radius: 50%;
  }
`;

const ToolTitle = styled(Heading).attrs({ level: 4 })`
  margin-left: ${spacing(1)};
`;

const ToolDescriptionPanel = ({
  tool,
  isOpen,
}: ToolDescriptionPanelProps): ReactElement => (
  <Panel isOpen={isOpen}>
    {isOpen && tool && (
      <>
        <ToolTitle>{tool.name}</ToolTitle>
        <PanelList>
          {tool.description?.map((item, i) => (
            <PanelListItem key={i}>{item}</PanelListItem>
          ))}
        </PanelList>
      </>
    )}
  </Panel>
);

export default ToolDescriptionPanel;
