import React, { DOMAttributes, ReactElement } from 'react';
import styled from 'styled-components';
import BackgroundImage from '@misc/BackgroundImage';
import Footer from '@misc/Footer';
import Header from '@misc/Header/Header';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyle from 'styles/GlobalStyle';
import materialUIThemeOverride from 'styles/material-ui-overrides/themeOverride';
import spacing from 'styles/spacing';
import color from 'styles/color';

interface LayoutProps extends DOMAttributes<Element> {
  image?: ReactElement;
}

const Content = styled.main`
  position: relative;
  z-index: 1;
  padding: ${spacing(5)};
  flex-grow: 1;
  transition: height 1s linear;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  background-color: ${color.grey};
  overflow-x: hidden;
  overflow-y: auto;
`;

const Layout = (props: LayoutProps): ReactElement => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={materialUIThemeOverride}>
      <Container>
        <Header />
        <Content>{props.children}</Content>
        {props.image ? <BackgroundImage>{props.image}</BackgroundImage> : null}
        <Footer />
      </Container>
    </ThemeProvider>
  </>
);

export default Layout;
