import BackgroundImage from '@misc/background-image/background-image';
import Footer from '@misc/footer/footer';
import Header from '@misc/header/header';
import React, { DOMAttributes, ReactElement } from 'react';

interface LayoutProps extends DOMAttributes<Element> {
  image?: React.ReactNode;
};

export const Layout = (props:LayoutProps): ReactElement => {
  return (
    <div className='main'>
      <Header />
      <main>{props.children}</main>
      {props.image ? <BackgroundImage>{props.image}</BackgroundImage> : null}
      <Footer />
    </div>
  );
};

export default Layout;
