import Layout from '@misc/layout/layout';
import { css } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '@misc/SEO/SEO';
import UnderConstruction from '@misc/under-construction/under-construction';
import { FadeIn } from '@shared/fade-in/fade-in';
import React, { ReactElement } from 'react';
import { Title, Subtitle } from 'styles/typography';
import spacing from 'styles/spacing';

const subtitleSpacing = css`
  margin-bottom: ${spacing(4)};
`;

export const Index = (): ReactElement => {
  return (
    <Layout
      image={
        <StaticImage src='../assets/home.jpg' alt='' placeholder='blurred' height={1000}/>
      }>
      <SEO title='Home' />
      <div>
        <FadeIn isVisible forwards={{ initialDelay: 0, delay: 500 }}>
          <Title>Hi, I&apos;m Jesse</Title>
          <Subtitle css={subtitleSpacing}>
            A full-stack web developer based in Toronto
          </Subtitle>
          <UnderConstruction />
        </FadeIn>
      </div>
    </Layout>
  );
};

export default Index;
