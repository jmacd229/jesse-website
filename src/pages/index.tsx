import Layout from '@misc/layout/layout';
import SEO from '@misc/SEO/SEO';
import UnderConstruction from '@misc/under-construction/under-construction';
import { FadeIn } from '@shared/fade-in/fade-in';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { ReactElement } from 'react';


export const Index = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "home.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

    return (
      <Layout image={<Img fluid={data.backgroundImage.childImageSharp.fluid} alt='' />}>
        <SEO title='Home' />
        <div>
        <FadeIn isVisible forwards={{ initialDelay: 0, delay: 500 }}>
          <h1>Hi, I&apos;m Jesse</h1>
          <h2 className='mb-4'>A full-stack web developer based in Toronto</h2>
          <UnderConstruction />
        </FadeIn>
      </div>
      </Layout>
    );

}

export default Index;
