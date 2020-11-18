import React, { ReactElement } from 'react';
import Header from './header';
import Footer from './footer';
import { Pages } from '../enums/pages.enum';
import Home from './pages/home';
import Helmet from 'react-helmet';

const currentPage = Pages.HOME;
export const pagePadding = 25;

const Layout = (): ReactElement => {
  return (
    <div className='main'>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet='utf-8' />
        <title>Jesse MacDougall - Full-stack Web Developer</title>
        <link rel='canonical' href='http://jessemacdougall.ca' />
      </Helmet>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
