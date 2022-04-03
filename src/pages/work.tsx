import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Layout from '@misc/Layout';
import SEO from '@misc/SEO';
import WorkExperience from 'components/work/WorkExperience';
import { Title } from 'styles/typography';
import { PROFESSIONAL_WORK_ITEMS } from 'components/work/work_items';
import { media, spacing } from 'styles';

const WorkTitle = styled(Title)`
  margin-bottom: ${spacing(10)};
`;

const WorkExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${media.medium} {
    grid-template-columns: 50% 50%;
  }
`;

export const Work = (): ReactElement => {
  return (
    <Layout>
      <SEO title='Work' />
      <div>
        <WorkTitle large>Work</WorkTitle>
        <WorkExperienceContainer>
          <WorkExperience title='Professional' work={PROFESSIONAL_WORK_ITEMS} />
          <WorkExperience title='Personal' />
        </WorkExperienceContainer>
      </div>
    </Layout>
  );
};

export default Work;
