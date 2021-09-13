import React, { DOMAttributes, ReactElement } from 'react';
import BackgroundImage from '@misc/background-image/background-image';
import Footer from '@misc/footer/footer';
import Header from '@misc/header/header';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyle from 'styles/GlobalStyle';
import materialUIThemeOverride from 'styles/material-ui-overrides/themeOverride';

interface LayoutProps extends DOMAttributes<Element> {
  image?: any;
}

export const Layout = (props: LayoutProps): ReactElement => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={materialUIThemeOverride}>
    <div className='main'>
      <Header />
      <main>{props.children}</main>
      {props.image ? <BackgroundImage>{props.image}</BackgroundImage> : null}
      <Footer />
    </div>
    </ThemeProvider>
  </>
);

export default Layout;
