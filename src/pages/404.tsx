import Layout from '@misc/layout/layout';
import SEO from '@misc/SEO/SEO';
import AnimatedButton from '@shared/animated-button/animated-button';
import arrow from 'animations/arrow.json';
import { Page } from 'enums/pages.enum';
import { Position } from 'enums/position.enum';
import React from 'react';
import './404.scss';

export const NotFound = () => {
  return (
    <Layout image={<div className='notFound-background'></div>}>
      <SEO title='404' />
      <div className='notFound'>
        <h1>404</h1>
        <h2 className='text-center'>
          Sorry, you&apos;ve managed to stumble upon a page that doesn&apos;t
          exist.
        </h2>
        <AnimatedButton
        id="back"
          animation={arrow}
          text='Back to home page'
          iconPosition={Position.ABOVE}
          link={Page.HOME}
        />
      </div>
    </Layout>
  );
};

export default NotFound;
