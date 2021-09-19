import Layout from '@misc/Layout';
import SEO from '@misc/SEO';
import Button from '@shared/Button';
import { Page } from 'enums/pages.enum';
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
        <Button>Back to home</Button>
      </div>
    </Layout>
  );
};

export default NotFound;
