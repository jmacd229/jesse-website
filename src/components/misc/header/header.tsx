import React, { ReactElement } from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import { Page } from 'enums/pages.enum';
import home from '../../../animations/home.json';
import { Position } from 'enums/position.enum';
import AnimatedButton from '@shared/animated-button/animated-button';
import { animatedGradient } from 'styles/animations/gradient';
import spacing from 'styles/spacing';
import HeaderLink from '@misc/header/HeaderLink';

const HeaderContainer = styled(Paper)`
  z-index: 1;
  position: relative;
  height: ${spacing(6)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${spacing(4)};
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

const getcurrentUrl = () =>
  typeof window !== 'undefined' ? window.location.pathname : '';

export default (): ReactElement => (
  <HeaderContainer elevation={3} role='banner'>
    {getcurrentUrl() !== Page.HOME && (
      <AnimatedButton
        id='home'
        animation={home}
        text='Home'
        iconPosition={Position.LEFT}
        link={Page.HOME}
        textOnHover={true}
      />
    )}
    {getLinks()}
  </HeaderContainer>
);

function getLinks() {
  console.log('process.env', process.env.IS_UNDER_CONSTRUCTION);
  if (JSON.parse(process.env.IS_UNDER_CONSTRUCTION)) {
    return 'More pages coming soon...';
  } else {
    return Object.values(Page).map(page =>
      page !== Page.HOME ? <HeaderLink page={page} /> : null
    );
  }
}
