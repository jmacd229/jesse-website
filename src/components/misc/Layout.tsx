import React, { ReactElement } from 'react';
import styled from 'styled-components';
import BackgroundImage, { BackgroundImageProps } from '@misc/BackgroundImage';
import Footer from '@misc/Footer';
import Header from '@misc/Header/Header';
import { ThemeProvider } from '@mui/material';
import GlobalStyle from 'styles/GlobalStyle';
import materialUIThemeOverride from 'styles/material-ui-overrides/themeOverride';
import { spacing, zIndex, color, media } from 'styles';

interface LayoutProps extends BackgroundImageProps {
  image?: ReactElement;
}

const Content = styled.main.attrs({
  tabIndex: -1,
})`
  position: relative;
  z-index: ${zIndex.MAIN};
  padding: ${spacing(3)};
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
  background-color: ${color.GREY};
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
