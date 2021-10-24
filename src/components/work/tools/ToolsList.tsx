import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

import ToolItem, { Tool } from 'components/work/tools/ToolItem';
import { spacing } from 'styles';

const ToolsContainer = styled.div`
  display: flex;
  margin-top: ${spacing(2)};
`;

export const ToolsList = ({ tools }: { tools: Tool[] }): ReactElement => {
  const [openTool, setOpenTool] = useState(null);

  const openItem = (id: string) => setOpenTool(id);
  const closeItem = () => setOpenTool(false);
  return (
    <ToolsContainer>
      {tools &&
        tools.length &&
        tools.map(tool => (
          <ToolItem
            key={tool.id}
            tool={tool}
            open={openTool === tool.id}
            onFocus={() => openItem(tool.id)}
            onMouseEnter={() => openItem(tool.id)}
            onBlur={closeItem}
            onMouseLeave={closeItem}
          />
        ))}
    </ToolsContainer>
  );
};

export default ToolsList;
