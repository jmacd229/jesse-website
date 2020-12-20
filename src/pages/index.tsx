import React, { FC } from 'react';
import Home from '@pages/home/home';
import Layout from '@misc/layout/layout';
import SEO from '@misc/SEO/SEO';

export const Index: FC = () => {
    return (
      <Layout>
        <SEO title='Home' />
        <Home />
      </Layout>
    );

}

export default Index;
