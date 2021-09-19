import React from 'react';
import styled from 'styled-components';

import Layout from '@misc/Layout';
import SEO from '@misc/SEO';
import Button from '@shared/Button';
import circuit from 'assets/circuit.svg';

import { Subtitle, Title } from 'styles/typography';
import { Page } from 'enums/pages.enum';
import { ReactElement } from 'react';
import spacing from 'styles/spacing';

const NotFoundBackground = styled.div`
  background-image: url(${circuit});
  background-repeat: repeat;
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackToHomeButton = styled(Button)`
  margin-top: ${spacing(4)};
`;

const NotFound = (): ReactElement => {
  return (
    <Layout image={<NotFoundBackground />}>
      <SEO title='Page Not Found' />
      <NotFoundContainer>
        <Title>404</Title>
        <Subtitle>
          Sorry, you&apos;ve managed to stumble upon a page that doesn&apos;t
          exist.
        </Subtitle>
        <BackToHomeButton to={Page.HOME}>Back to home</BackToHomeButton>
      </NotFoundContainer>
    </Layout>
  );
};

export default NotFound;
