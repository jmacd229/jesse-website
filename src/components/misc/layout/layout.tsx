import React, { FC, PropsWithChildren, ReactElement } from 'react';
import Header from '@misc/header/header';
import Footer from '@misc/footer/footer';
import PropTypes from 'prop-types';
import BackgroundImage from '@misc/background-image/background-image';

type LayoutProps = {
  image: React.ReactNode;
};

const Layout: FC<PropsWithChildren<LayoutProps>> = (props): ReactElement => {
  return (
    <div className='main'>
      <Header />
      <main>{props.children}</main>
      {props.image ? <BackgroundImage>{props.image}</BackgroundImage> : null}
      <Footer />
    </div>
  );
};

Layout.propTypes = { children: PropTypes.node, image: PropTypes.node };

export default Layout;
