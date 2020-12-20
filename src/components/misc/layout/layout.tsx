import React, { FC, ReactElement } from 'react';
import Header from '@misc/header/header';
import Footer from '@misc/footer/footer';
import PropTypes from 'prop-types';

const Layout: FC = ({children}): ReactElement => {
  return (
    <div className='main'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = { children: PropTypes.node };

export default Layout;
