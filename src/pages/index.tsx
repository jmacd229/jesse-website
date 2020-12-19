import React, { FC } from 'react';
import Home from '../components/pages/home/home';
import Layout from '../components/misc/layout/layout';
import SEO from '../components/misc/SEO/SEO';

export const pagePadding = 25;

export const Index: FC = () => {
    return (
      <Layout>
        <SEO title='Home' />
        <Home />
      </Layout>
    );

}

export default Index;
