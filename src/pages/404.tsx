import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/misc/layout/layout';
import SEO from '../components/misc/SEO/SEO';
import arrow from '../animations/arrow.json';
import AnimatedButton from '../components/shared/animated-button/animated-button';
import { Position } from '../enums/position.enum';
import './404.scss';

export const pagePadding = 25;

export const Index: FC = () => {
  return (
    <Layout>
      <SEO title='404' />
      <div className='notFound'>
      <h1>404</h1>
      <h2 className='text-center'>
        Sorry, you&apos;ve managed to stumble upon a page that doesn&apos;t
        exist.
      </h2>
      <AnimatedButton
        animation={arrow}
        text='Back to home page'
        iconPosition={Position.ABOVE}
      />
</div>
    </Layout>
  );
};

export default Index;
