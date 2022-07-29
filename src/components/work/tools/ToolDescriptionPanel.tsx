import React, { useMemo, ReactElement } from 'react';
import Panel, { PanelProps } from '@shared/Panel';
import styled from 'styled-components';
import spacing from 'styles/spacing';
import { Tool } from 'components/work/tools/tool_items';
import { Heading } from 'styles/typography';
import { color } from 'styles';

export interface ToolDescriptionPanelProps extends PanelProps {
  workId: string;
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

export const getPanelId = (workId: string): string => `${workId}-panel`;

const getDescription = (tool: Tool, workId: string): Array<string> => {
  // If there is only one description for the tool since it was only used in one workplace, return as is
  if (tool.description instanceof Array) {
    return tool.description as Array<string>;
  }
  // Otherwise, attempt to retrieve the workplace specific description
  return tool.description[workId];
};

const ToolDescriptionPanel = ({
  workId,
  tool,
  isOpen,
}: ToolDescriptionPanelProps): ReactElement => {
  const panelContent = useMemo(
    () =>
      isOpen &&
      tool && (
        <>
          <ToolTitle>{tool.name}</ToolTitle>
          <PanelList id={getPanelId(workId)}>
            {getDescription(tool, workId).map((item, i) => (
              <PanelListItem key={i}>{item}</PanelListItem>
            ))}
          </PanelList>
        </>
      ),
    [isOpen, tool]
  );
  return (
    <Panel isOpen={isOpen} aria-live='polite'>
      {panelContent}
    </Panel>
  );
};

export default ToolDescriptionPanel;
