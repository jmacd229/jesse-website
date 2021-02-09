import Layout from '@misc/layout/layout';
import SEO from '@misc/SEO/SEO';
import AnimatedButton from '@shared/animated-button/animated-button';
import arrow from 'animations/arrow.json';
import 'bootstrap/dist/css/bootstrap.css';
import { Position } from 'enums/position.enum';
import React from 'react';

export const Work = () => {
  return (
    <Layout>
      <SEO title='Work' />
      <div className='notFound'>
        <h1>Work</h1>
        <AnimatedButton
          animation={arrow}
          text='Back to home page'
          iconPosition={Position.ABOVE}
          link='/'
        />
      </div>
    </Layout>
  );
};

export default Work;
