import Layout from '@misc/Layout';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '@misc/SEO';
import UnderConstruction from '@misc/UnderConstruction';
import { FadeIn } from '@shared/fade-in/fade-in';
import React, { ReactElement } from 'react';
import { Title, Subtitle } from 'styles/typography';
import spacing from 'styles/spacing';

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: ${spacing(4)};
`;

export const Index = (): ReactElement => {
  return (
    <Layout
      image={
        <StaticImage
          src='../assets/home.jpg'
          alt=''
          placeholder='blurred'
          height={1000}
        />
      }>
      <SEO title='Home' />
      <div>
        <FadeIn isVisible forwards={{ initialDelay: 0, delay: 500 }}>
          <Title>Hi, I&apos;m Jesse</Title>
          <StyledSubtitle>
            A full-stack web developer based in Toronto
          </StyledSubtitle>
          <UnderConstruction />
        </FadeIn>
      </div>
    </Layout>
  );
};

export default Index;
