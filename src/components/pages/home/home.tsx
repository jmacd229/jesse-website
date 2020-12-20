import React, { ReactElement, useEffect, useState } from 'react';
import './home.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import UnderConstruction from '@misc/under-construction/under-construction';
import { FadeIn } from '@shared/fade-in/fade-in';

const Home = (): ReactElement => {
  const MAX_OPACITY_WIDTH = 1200;
  const [opacity, setOpacity] = useState(0);
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

  useEffect(() => {
    function handleWindowResize() {
      setOpacity(
        window.innerWidth >= MAX_OPACITY_WIDTH
          ? 1
          : window.innerWidth / MAX_OPACITY_WIDTH
      );
    }
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return (
    <main className='home'>
      <div>
        <FadeIn whenLoaded forwards={{ initialDelay: 0, delay: 500 }}>
          <h1>Hi, I&apos;m Jesse</h1>
          <h2 className='mb-4'>A full-stack web developer based in Toronto</h2>
          <UnderConstruction />
        </FadeIn>
      </div>
      <div className='background-image' style={{ opacity: opacity }}>
        <Img fluid={data.backgroundImage.childImageSharp.fluid} alt='' />
      </div>
    </main>
  );
};

export default Home;
