import React, { DOMAttributes, ReactElement } from 'react';
import BackgroundImage from '@misc/BackgroundImage';
import Footer from '@misc/footer/footer';
import Header from '@misc/header/Header';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyle from 'styles/GlobalStyle';
import materialUIThemeOverride from 'styles/material-ui-overrides/themeOverride';

interface LayoutProps extends DOMAttributes<Element> {
  image?: any;
}

export default (props: LayoutProps): ReactElement => (
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
