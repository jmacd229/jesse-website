import React, { ReactElement } from 'react';
import { Paper } from '@mui/material';
import styled from 'styled-components';
import { Page } from 'model/enums/pages.enum';
import spacing from 'styles/spacing';
import HeaderLink from '@misc/Header/HeaderLink';
import createLineGradient from 'styles/lineGradient';
import { Position } from 'model/enums/position.enum';

const HeaderContainer = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: ${spacing(6)};
  padding: 0 ${spacing(4)};
  z-index: 1;
  flex-shrink: 0;
  ${createLineGradient(Position.BELOW)}
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
