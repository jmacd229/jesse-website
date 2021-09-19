import React, { ReactElement } from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import { Page } from 'enums/pages.enum';
import { animatedGradient } from 'styles/animations/gradient';
import spacing from 'styles/spacing';
import HeaderLink from '@misc/header/HeaderLink';

const HeaderContainer = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: ${spacing(6)};
  padding: 0 ${spacing(4)};
  z-index: 1;
  flex-shrink: 0;
  &:after {
    ${animatedGradient}
    content: '';
    height: 3px;
    opacity: 0.4;
    width: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    border-top-left-radius: 100%;
  }
`;

const BackToHomeLink = styled(HeaderLink)`
  margin-right: auto;
`;

const getcurrentUrl = () =>
  typeof window !== 'undefined' ? window.location.pathname : '';

const getLinks = () => {
  if (JSON.parse(process.env.IS_UNDER_CONSTRUCTION)) {
    return 'More pages coming soon...';
  } else {
    return Object.values(Page).map(page =>
      page !== Page.HOME ? <HeaderLink page={page} key={page} /> : null
    );
  }
};

const Header = (): ReactElement => (
  <HeaderContainer elevation={3} role='banner'>
    {getcurrentUrl() !== Page.HOME && <BackToHomeLink page={Page.HOME} />}
    {getLinks()}
  </HeaderContainer>
);

export default Header;
