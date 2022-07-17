import React, { ReactElement } from 'react';
import styled from 'styled-components';

import WorkItem, { WorkItemProps } from 'components/work/WorkItem';
import InProgress from 'components/misc/InProgress';
import { Heading, Subtitle } from 'styles/typography';
import { spacing, media } from 'styles';

export interface WorkExperienceProps {
  title: string;
  work?: WorkItemProps[];
}

const WorkExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:first-child) {
    margin-top: ${spacing(5)};
    ${media.medium} {
      margin-top: 0;
    }
  }
  ${media.medium} {
    max-width: 70rem;
  }
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
      {work ? (
        <WorkList role='list' aria-labelledby={id}>
          {work.map((workItem, index) => (
            <WorkItem key={index} {...workItem} />
          ))}
        </WorkList>
      ) : (
        <InProgress>
          <Heading level={3}>
            Sorry, I&apos;m still working on this section of the site.
          </Heading>
        </InProgress>
      )}
    </WorkExperienceContainer>
  );
};

export default WorkExperience;
