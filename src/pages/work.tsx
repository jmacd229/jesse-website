import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Layout from '@misc/Layout';
import SEO from '@misc/SEO';
import WorkExperience from 'components/work/WorkExperience';
import { Title } from 'styles/typography';
import { PROFESSIONAL_WORK_ITEMS } from 'components/work/work_items';
import { color, media, spacing } from 'styles';
import createLinearGradient from 'styles/createLinearGradient';
import circuit from 'assets/circuit.svg';

const WorkExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  max-width: 1700px;

  ${media.medium} {
    grid-template-columns: 50% 50%;
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${circuit});
  background-repeat: repeat;
`;

const WorkTitle = styled(Title)`
  margin-bottom: ${spacing(10)};
`;

export const Work = (): ReactElement => {
  return (
    <Layout
      image={<BackgroundImage />}
      gradient={createLinearGradient(
        270,
        [color.GREY, '0%'],
        [color.SEMI_TRANSPARENT, '10%'],
        [color.TRANSPARENT, '50%'],
        [color.SEMI_TRANSPARENT, '90%'],
        [color.GREY, '100%']
      )}
    >
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
