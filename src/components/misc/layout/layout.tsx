import React, { FC, ReactElement } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
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
