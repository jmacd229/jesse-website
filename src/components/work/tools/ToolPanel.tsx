import React, { useMemo, ReactElement } from 'react';
import Panel, { PanelProps } from '@shared/Panel';
import styled from 'styled-components';
import { Tool } from 'components/work/tools/tool_items';
import { SmallText } from 'styles/typography';
import { Position } from 'model/enums/position.enum';

export interface ToolPanelProps extends PanelProps {
  tool?: Tool;
}

const ToolPanelContainer = styled(Panel)`
  display: flex;
  align-self: center;
  white-space: nowrap;
  justify-content: center;
`;

export const getPanelId = (workId: string): string => `${workId}-panel`;

const ToolPanel = ({ tool, isOpen }: ToolPanelProps): ReactElement => {
  const panelContent = useMemo(
    () => isOpen && tool && <SmallText noMargin>{tool.name}</SmallText>,
    [isOpen, tool]
  );
  return (
    <ToolPanelContainer
      isOpen={isOpen}
      gradientPosition={Position.ABOVE}
      aria-live='polite'
    >
      {panelContent}
    </ToolPanelContainer>
  );
};

export default ToolPanel;
