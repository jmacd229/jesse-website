import React, { ReactElement } from 'react';
import styled from 'styled-components';

import WorkItem, { WorkItemProps } from 'components/work/WorkItem';
import { Subtitle } from 'styles/typography';

export interface WorkExperienceProps {
  title: string;
  work?: WorkItemProps[];
}

const WorkExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 50%;
`;

const WorkExperienceTitle = styled(Subtitle)`
  grid-area: title;
`;

const WorkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WorkExperience = ({
  title,
  work,
}: WorkExperienceProps): ReactElement => {
  const id = title.replace(/\s+/g, '');
  return (
    <WorkExperienceContainer>
      <WorkExperienceTitle id={id}>{title}</WorkExperienceTitle>
      <WorkList role='list' aria-labelledby={id}>
        {work?.map((workItem, index) => (
          <WorkItem key={index} {...workItem} />
        ))}
      </WorkList>
    </WorkExperienceContainer>
  );
};

export default WorkExperience;
