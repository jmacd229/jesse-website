import React, { ReactElement } from 'react';
import { Paper, Tooltip } from '@mui/material';
import styled from 'styled-components';
import { Page } from 'model/enums/pages.enum';
import spacing from 'styles/spacing';
import HeaderLink from '@misc/Header/HeaderLink';
import createLineGradient from 'styles/lineGradient';
import { Position } from 'model/enums/position.enum';
import Animation from 'components/shared/Animation';
import bricks from 'animations/bricks.json';
import useCurrentUrl from 'hooks/useCurrentUrl';

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

const InProgress = styled(Animation).attrs({
  data: bricks,
  loop: false,
  autoplay: false,
  onHover: true,
})`
  width: ${spacing(5)};
`;

const BackToHomeLink = styled(HeaderLink)`
  margin-right: auto;
`;

const getLinks = () => {
  const availableLinks = JSON.parse(process.env.AVAILABLE_LINKS);
  return (
    <>
      {availableLinks.map(pageName => (
        <HeaderLink page={Page[pageName]} key={pageName} />
      ))}
      {/* Subtract 1 since the Page enum contains 'HOME' */}
      {availableLinks.length < Object.keys(Page).length - 1 && (
        <Tooltip arrow title='More pages are currently in progress'>
          <div role='group'>
            <InProgress />
          </div>
        </Tooltip>
      )}
    </>
  );
};

const Header = (): ReactElement => {
  const currentUrl = useCurrentUrl();
  return (
    <HeaderContainer elevation={3} role='banner'>
      {currentUrl !== Page.HOME && <BackToHomeLink page={Page.HOME} />}
      {getLinks()}
    </HeaderContainer>
  );
};

export default Header;
