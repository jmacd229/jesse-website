import React, { ReactElement } from 'react';
import styled from 'styled-components';
import BackgroundImage, { BackgroundImageProps } from '@misc/BackgroundImage';
import Footer from '@misc/Footer';
import Header from '@misc/Header/Header';
import { ThemeProvider } from '@mui/material';
import GlobalStyle from 'styles/GlobalStyle';
import materialUIThemeOverride from 'styles/material-ui-overrides/themeOverride';
import spacing from 'styles/spacing';
import Color from 'styles/color';
import media from 'styles/media';

interface LayoutProps extends BackgroundImageProps {
  image?: ReactElement;
}

const Content = styled.main`
  position: relative;
  z-index: 1;
  padding: ${spacing(5)};
  flex-grow: 1;
  transition: height 1s linear;

  ${media.large} {
    padding: ${spacing(5)} ${spacing(20)};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  background-color: ${Color.GREY};
  overflow-x: hidden;
  overflow-y: auto;
`;

const Layout = ({ image, children, gradient }: LayoutProps): ReactElement => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={materialUIThemeOverride}>
      <Container>
        <Header />
        <Content>{children}</Content>
        {image ? (
          <BackgroundImage gradient={gradient}>{image}</BackgroundImage>
        ) : null}
        <Footer />
      </Container>
    </ThemeProvider>
  </>
);

export default Layout;
